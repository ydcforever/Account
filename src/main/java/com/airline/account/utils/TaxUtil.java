package com.airline.account.utils;

import com.airline.account.model.et.Segment;
import com.airline.account.model.et.Ticket;
import com.airline.account.ticket.ETax;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 */
public final class TaxUtil {

    /**
     * 税费比对，主要是改签
     *
     * @param taxes           新票税费
     * @param orgSegTaxes 原票分摊税费 要求金额负数
     * @return
     */
    public static List<ETax> taxCollate(List<ETax> taxes, List<ETax> orgSegTaxes) {
        for (ETax tax : taxes) {
            ETax f = findTax(orgSegTaxes, tax);
            if (f != null) {
                tax.setAmt(tax.getAmt() + f.getAmt());
            }
        }
        taxes.addAll(orgSegTaxes);
        return taxes;
    }

    public static ETax findTax(List<ETax> taxes, ETax tax) {
        Iterator<ETax> iterator = taxes.iterator();
        while (iterator.hasNext()) {
            ETax queryTax = iterator.next();
            if (tax.key().equals(queryTax.key())) {
                iterator.remove();
                return queryTax;
            }
        }
        return null;
    }

    public static HashMap procedure(Ticket ticket, List<Segment> segments){
        HashMap<String, Object> hashMap = new HashMap<>();
        String routing = "";
        String mktCxr = "";
        String clazz = "";
        String deptDate="";
        String arriveDate="";
        for(Segment segment: segments) {
            routing += segment.getOriginCityCode() + "-" + segment.getDestinationCityCode() + ";";
            mktCxr += segment.getCarrierIataNo() + ";";
            clazz += segment.getServiceClass() + ";";
            deptDate += segment.getDepartureDate() + ";";
            arriveDate += segment.getArriveDate() + ";";
        }
        hashMap.put("routing",routing);
        hashMap.put("turnaround_no", 1);
        hashMap.put("booking_date",ticket.getIssueDate());
        hashMap.put("marketing_carrier", mktCxr);
        hashMap.put("operating_carrier", "");
//        if (!StringUtils.isBlank(flights)) {
//            hashMap.put("flights", flights.substring(1));
//        }
//        if (!StringUtils.isBlank(planeTypes)) {
//            hashMap.put("plane_types", planeTypes.substring(1));
//        }
        hashMap.put("sale_organization", "MU");
        hashMap.put("clazz", clazz);
        hashMap.put("passenger_type",ticket.getPaxType());
//        hashMap.put("passenger_age", age);
//        hashMap.put("passenger_identity",itinerary.getPassenger().getPassengerIdentity());
//        hashMap.put("passenger_region_type",itinerary.getPassenger().getPassengerRegionType());
//        hashMap.put("passenger_region",itinerary.getPassenger().getPassengerRegion());
        hashMap.put("sale_point", "CN");
        hashMap.put("ticket_point", "CN");
        hashMap.put("sale_currency",ticket.getTotalFareCurrency());
        hashMap.put("fare_base","");
        hashMap.put("fare_amount",ticket.getEquivalentFarePaid());
        hashMap.put("ob_fee",0);
        hashMap.put("services_flight_related_fee",0);
        hashMap.put("services_ticket_related_fee",0);
        hashMap.put("services_merchandise_fee", 0);
        hashMap.put("services_oc_fee", 0);
        hashMap.put("baggage_charges", 0);
        hashMap.put("od_fee", 0);
        hashMap.put("departure_date", "");
        hashMap.put("arrival_date","");
        hashMap.put("routing_yq_amount", 0);
        hashMap.put("routing_yr_amount", 0);
        return hashMap;
    }
}
