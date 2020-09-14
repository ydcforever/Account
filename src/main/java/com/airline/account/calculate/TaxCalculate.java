package com.airline.account.calculate;

import com.airline.account.ticket.Segment;
import com.airline.account.ticket.Ticket;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpEntityEnclosingRequestBase;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

/**
 * Created by ydc on 2020/9/7.
 */
public class TaxCalculate {

//    /**
//     * 票面税费计算
//     * @return
//     */
//    List<Tax> queryTax();
//
//    /**
//     * 基于航段的税费计算
//     * @return
//     */
//    List<SegmentTax> querySegTax();

    public String query(String uri, String requestJson) {
        HttpGetWithEntity e = new HttpGetWithEntity();
        e.setURI(URI.create(uri));
        e.addHeader("Content-Type", "application/json");
        e.addHeader("Accept", "application/json");
        ByteArrayEntity entity = new ByteArrayEntity(requestJson.getBytes(StandardCharsets.UTF_8));
        entity.setContentType("application/json");
        e.setEntity(entity);
        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse res = httpClient.execute(e)) {
            HttpEntity responseEntity = res.getEntity();
            if (responseEntity != null) {
                return EntityUtils.toString(responseEntity);
            }
        } catch (IOException e1) {
            e1.printStackTrace();
        }
        return "";
    }

    private static class HttpGetWithEntity extends HttpEntityEnclosingRequestBase {
        private final static String METHOD_NAME = "GET";

        @Override
        public String getMethod() {
            return METHOD_NAME;
        }
    }

    public String javaTax3(Ticket ticket, List<Segment> segments){
        StringBuilder body = new StringBuilder();
        body.append("{\"scurr\":\"").append(ticket.getTotalFareCurrency())
                .append("\",\"passenger\":{\"type\":\"").append(ticket.getPaxType())
                .append("\"},").append(segmentJson(segments)).append("}");
        return body.toString();
    }

    public StringBuilder segmentJson(List<Segment> segments){
        StringBuilder body = new StringBuilder("\"sectors\":[");
        for (int i = 0, len = segments.size(); i < len; i++) {
            Segment segment = segments.get(i);
            body.append("{")
                    .append("\"clazz\":\"").append(segment.getServiceClass())
                    .append("\",\"begin\":\"").append(segment.getDepartureDate())
                    .append("\",\"end\":\"").append(segment.getArriveDate())
                    .append("\",\"from\":\"").append(segment.getOriginAirportCode())
                    .append("\",\"to\":\"").append(segment.getDestinationAirportCode())
                    .append("\",\"mcxr\":\"").append(segment.getCarrierIataNo());
            body.append("\",\"mfno\":\"").append(segment.getCarrierIataNo()).append(segment.getFlightNo());
//            if (!"".equals(pt[0])) {
//                body.append("\",\"ptype\":\"").append(segment.);
//            }
            body.append("\"}");
            if (i < len - 1) {
                body.append(",");
            }
        }
        return body.append("]");
    }

    public String procedureTax3(Map<String, Object> map) {
        StringBuilder body = new StringBuilder();
        String flt = map.get("flights").toString();
        String mkt = map.get("marketing_carrier").toString();
        String opt = map.get("operating_carrier").toString();

        String t_mkt = "";
        String t_opt = "";
        if (!"".equals(flt)) {
            String[] flt_nos = flt.split(";");
            String[] mkts = mkt.split(";");
            String[] opts = opt.split(";");
            for (int i = 0, len = flt_nos.length; i < len; i++) {
                t_mkt += mkts[i] + flt_nos[i] + ";";
                t_opt += opts[i] + flt_nos[i] + ";";
            }
        } else {
            t_opt = opt;
            t_mkt = mkt;
        }

        String id = "N";
        String region = "CN";
        body.append("{\"bdate\":\"").append(map.get("booking_date")).append("\",\"lang\":\"ZH\",\"resultType\":\"T\",\"routeList\":[{\"begin\":\"")
                .append(map.get("departure_date")).append("\",\"end\":\"").append(map.get("arrival_date")).append("\",\"clazz\":\"").append(map.get("clazz"))
                .append("\",\"mcxr\":\"").append(t_mkt).append("\",\"ocxr\":\"").append(t_opt).append("\",\"passenger\":[{")
                .append("\"type\":\"").append(map.get("passenger_type"))
                //.append("\,"age\":").append(map.get("passenger_age"))
                .append("\",\"fee\":{\"fare\":\"").append(map.get("fare_amount")).append("\"},\"id\":\"").append(id)
                .append("\",\"region\":\"").append(region)
                .append("\"}],\"routing\":\"")
                .append(map.get("routing")).append("\"}],")
                .append("\"scurrency\":\"").append(map.get("sale_currency")).append("\",\"spoint\":\"").append(map.get("sale_point"))
                .append("\",\"tcxr\":\"").append(map.get("sale_organization")).append("\",\"tpoint\":\"").append(map.get("ticket_point"))
                .append("\",\"user\":{\"bookingChannelCode\":\"13\",\"bookingChannelName\":\"B2CUS\",")
                .append("\"encryptedStr\":\"FDDD31DF3B9C24A8D16EFA23A216C1039E2577D1D0160A3F626B6ED93B984CEBCFC1C6C916936C87\"")
                .append("}}");
        return body.toString();
    }
}
