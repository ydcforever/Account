package com.airline.account.service.move;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.mapper.acca.TaxMapper;
import com.airline.account.mapper.et.AuditorSegmentMapper;
import com.airline.account.mapper.et.AuditorTaxMapper;
import com.airline.account.mapper.et.AuditorTicketMapper;
import com.airline.account.model.acca.Sal;
import com.airline.account.model.acca.TaxDp;
import com.airline.account.model.acca.TaxIp;
import com.airline.account.model.et.Segment;
import com.airline.account.model.et.AuditorTax;
import com.airline.account.model.et.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ydc on 2020/9/17.
 */
@Service
public class MoveServiceImpl implements MoveService {

    @Autowired
    private AuditorTicketMapper auditorTicketMapper;

    @Autowired
    private AuditorSegmentMapper auditorSegmentMapper;

    @Autowired
    private AuditorTaxMapper auditorTaxMapper;

    @Autowired
    private SalMapper salMapper;

    @Autowired
    private TaxMapper taxMapper;

    /**
     * SAL国际日数据迁移
     * @param cnjSal
     */
    @Override
    public void moveDIp(Sal cnjSal) {
        List<Sal> sals = salMapper.queryDIpCnj(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s);
                addIpSeg(segments, cnjSal);
                auditorSegmentMapper.insertSegment(segments);
                List<TaxIp> taxIps = taxMapper.queryDTaxIp(cnjSal);
                addIpTax(auditorTaxes, taxIps);
            }
            auditorTicketMapper.insertTicket(tickets);
            auditorSegmentMapper.insertSegment(segments);
            auditorTaxMapper.insertTax(auditorTaxes);
        }
    }

    /**
     * SAL国内日数据迁移
     * @param cnjSal
     */
    @Override
    public void moveDDp(Sal cnjSal) {
        List<Sal> sals = salMapper.queryDDpCnj(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s);
                addDpSeg(segments, cnjSal);
                auditorSegmentMapper.insertSegment(segments);
                List<TaxDp> taxDps = taxMapper.queryDTaxDp(cnjSal);
                addDpTax(auditorTaxes, taxDps);
            }
            auditorTicketMapper.insertTicket(tickets);
            auditorSegmentMapper.insertSegment(segments);
            auditorTaxMapper.insertTax(auditorTaxes);
        }
    }

    /**
     * SAL国际月数据迁移
     * @param cnjSal
     */
    @Override
    public void moveMIp(Sal cnjSal) {
        List<Sal> sals = salMapper.queryMIpCnj(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s);
                addIpSeg(segments, cnjSal);
                auditorSegmentMapper.insertSegment(segments);
                List<TaxIp> taxIps = taxMapper.queryDTaxIp(cnjSal);
                addIpTax(auditorTaxes, taxIps);
            }
            auditorTicketMapper.insertTicket(tickets);
            auditorSegmentMapper.insertSegment(segments);
            auditorTaxMapper.insertTax(auditorTaxes);
        }
    }

    /**
     * SAL国内月数据迁移
     * @param cnjSal
     */
    @Override
    public void moveMDp(Sal cnjSal) {
        List<Sal> sals = salMapper.queryMDpCnj(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s);
                addDpSeg(segments, cnjSal);
                auditorSegmentMapper.insertSegment(segments);
                List<TaxDp> taxDps = taxMapper.queryDTaxDp(cnjSal);
                addDpTax(auditorTaxes, taxDps);
            }
            auditorTicketMapper.insertTicket(tickets);
            auditorSegmentMapper.insertSegment(segments);
            auditorTaxMapper.insertTax(auditorTaxes);
        }
    }

    /**
     * SAL票面映射
     * @param list
     * @param sal
     */
    private void addTicket(List<Ticket> list, Sal sal){
        Ticket ticket = new Ticket();
        ticket.setDocumentCarrierIataNo(sal.getAirline3code());
        ticket.setDocumentNo(sal.getTicketNo());
        ticket.setDocumentType(sal.getSaleType());
        ticket.setAgentIataNo(sal.getAgentNo());
        ticket.setCnjCurrent(sal.getCnjNo());
        ticket.setFirstTicketNo(sal.getFirstTicketNo());
        ticket.setTourCode(sal.getTourCode());
        ticket.setCommissionRate(sal.getAgentCommissionRate());
        ticket.setCommissionAmount(sal.getAgentCommission());
        ticket.setEndorsementRestriction(sal.getEndorsementRestriction());
        ticket.setTotalFare(sal.getIncomePaxSc());
        ticket.setTotalFareCurrency(sal.getSaleCurrency());
        ticket.setPaxType(sal.getPaxType());
        ticket.setPaxQty(sal.getPaxQty());
        ticket.setFareCalculationArea(sal.getFca());
        ticket.setPassengerName(sal.getPaxName());
        list.add(ticket);
    }

    /**
     * 国内航段映射
     * @param list
     * @param sal
     */
    private void addDpSeg(List<Segment> list, Sal sal){
        String[] status = sal.getCouponUseIndicator().split("");
        for(int i = 0, len = status.length; i<len; i++){
            Segment seg = new Segment();
            if(!"V".equals(status[i])){
                if (i == 1) {
                    seg.setDocumentCarrierIataNo(sal.getAirline3code());
                    seg.setDocumentNo(sal.getTicketNo());
                    seg.setFirstTicketNo(sal.getFirstTicketNo());
                    seg.setIssueDate(sal.getIssueDate());
                    seg.setCouponNo(1);
                    seg.setOriginAirportCode(sal.getAirport1());
                    seg.setDestinationAirportCode(sal.getAirport2());
                    seg.setCarrierIataNo(sal.getCarrier1());
                    seg.setFareBasis(sal.getFareBasis1());
                    seg.setFlightNo(sal.getFlightNo1());
                    seg.setCouponUseIndi(status[i]);
                    list.add(seg);
                } else if (i == 2){
                    seg.setDocumentCarrierIataNo(sal.getAirline3code());
                    seg.setDocumentNo(sal.getTicketNo());
                    seg.setFirstTicketNo(sal.getFirstTicketNo());
                    seg.setIssueDate(sal.getIssueDate());
                    seg.setDocumentCarrierIataNo(sal.getAirline3code());
                    seg.setDocumentNo(sal.getTicketNo());
                    seg.setCouponNo(2);
                    seg.setOriginAirportCode(sal.getAirport2());
                    seg.setDestinationAirportCode(sal.getAirport3());
                    seg.setCarrierIataNo(sal.getCarrier2());
                    seg.setFareBasis(sal.getFareBasis2());
                    seg.setFlightNo(sal.getFlightNo2());
                    seg.setCouponUseIndi(status[i]);
                    list.add(seg);
                } else if (i == 3){
                    seg.setDocumentCarrierIataNo(sal.getAirline3code());
                    seg.setDocumentNo(sal.getTicketNo());
                    seg.setFirstTicketNo(sal.getFirstTicketNo());
                    seg.setIssueDate(sal.getIssueDate());
                    seg.setDocumentCarrierIataNo(sal.getAirline3code());
                    seg.setDocumentNo(sal.getTicketNo());
                    seg.setCouponNo(3);
                    seg.setOriginAirportCode(sal.getAirport3());
                    seg.setDestinationAirportCode(sal.getAirport4());
                    seg.setCarrierIataNo(sal.getCarrier3());
                    seg.setFareBasis(sal.getFareBasis3());
                    seg.setFlightNo(sal.getFlightNo3());
                    seg.setCouponUseIndi(status[i]);
                    list.add(seg);
                } else if(i == 4){
                    seg.setDocumentCarrierIataNo(sal.getAirline3code());
                    seg.setDocumentNo(sal.getTicketNo());
                    seg.setFirstTicketNo(sal.getFirstTicketNo());
                    seg.setIssueDate(sal.getIssueDate());
                    seg.setDocumentCarrierIataNo(sal.getAirline3code());
                    seg.setDocumentNo(sal.getTicketNo());
                    seg.setCouponNo(4);
                    seg.setOriginAirportCode(sal.getAirport4());
                    seg.setDestinationAirportCode(sal.getAirport5());
                    seg.setCarrierIataNo(sal.getCarrier4());
                    seg.setFareBasis(sal.getFareBasis4());
                    seg.setFlightNo(sal.getFlightNo4());
                    seg.setCouponUseIndi(status[i]);
                    list.add(seg);
                }
            }
        }
    }

    /**
     * 国内税费映射
     * @param auditorTaxes
     * @param taxDps
     */
    private void addDpTax(List<AuditorTax> auditorTaxes, List<TaxDp> taxDps){
        for(TaxDp dp : taxDps){
            if(dp.getTaxAmount1() != 0){
                AuditorTax auditorTax = new AuditorTax();
                auditorTax.setDocumentCarrierIataNo(dp.getAirline3code());
                auditorTax.setDocumentNo(dp.getTicketNo());
                auditorTax.setTaxCode(dp.getTaxType());
                auditorTax.setTaxAmount(dp.getTaxAmount1());
                auditorTax.setTaxCurrency(dp.getCurrency());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount2() != 0){
                AuditorTax auditorTax = new AuditorTax();
                auditorTax.setDocumentCarrierIataNo(dp.getAirline3code());
                auditorTax.setDocumentNo(dp.getTicketNo());
                auditorTax.setTaxCode(dp.getTaxType2());
                auditorTax.setTaxAmount(dp.getTaxAmount2());
                auditorTax.setTaxCurrency(dp.getCurrency());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount3() != 0){
                AuditorTax auditorTax = new AuditorTax();
                auditorTax.setDocumentCarrierIataNo(dp.getAirline3code());
                auditorTax.setDocumentNo(dp.getTicketNo());
                auditorTax.setTaxCode(dp.getTaxType3());
                auditorTax.setTaxAmount(dp.getTaxAmount3());
                auditorTax.setTaxCurrency(dp.getCurrency());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount4() != 0){
                AuditorTax auditorTax = new AuditorTax();
                auditorTax.setDocumentCarrierIataNo(dp.getAirline3code());
                auditorTax.setDocumentNo(dp.getTicketNo());
                auditorTax.setTaxCode(dp.getTaxType4());
                auditorTax.setTaxAmount(dp.getTaxAmount4());
                auditorTax.setTaxCurrency(dp.getCurrency());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount5() != 0){
                AuditorTax auditorTax = new AuditorTax();
                auditorTax.setDocumentCarrierIataNo(dp.getAirline3code());
                auditorTax.setDocumentNo(dp.getTicketNo());
                auditorTax.setTaxCode(dp.getTaxType5());
                auditorTax.setTaxAmount(dp.getTaxAmount5());
                auditorTax.setTaxCurrency(dp.getCurrency());
                auditorTaxes.add(auditorTax);
            }
        }
    }

    /**
     * 国际航段映射
     * @param list
     * @param sal
     */
    private void addIpSeg(List<Segment> list, Sal sal){
        String[] status = sal.getCouponUseIndicator().split("");
        for(String s : status){
            Segment seg = new Segment();
            if("1".equals(s)){
                seg.setDocumentCarrierIataNo(sal.getAirline3code());
                seg.setDocumentNo(sal.getTicketNo());
                seg.setFirstTicketNo(sal.getFirstTicketNo());
                seg.setIssueDate(sal.getIssueDate());
                seg.setCouponNo(1);
                seg.setOriginAirportCode(sal.getAirport1());
                seg.setDestinationAirportCode(sal.getAirport2());
                seg.setCarrierIataNo(sal.getCarrier1());
                seg.setFareBasis(sal.getFareBasis1());
                seg.setFlightNo(sal.getFlightNo1());
                seg.setCouponUseIndi("F");
                list.add(seg);
            } else if ("2".equals(s)){
                seg.setDocumentCarrierIataNo(sal.getAirline3code());
                seg.setDocumentNo(sal.getTicketNo());
                seg.setFirstTicketNo(sal.getFirstTicketNo());
                seg.setIssueDate(sal.getIssueDate());
                seg.setCouponNo(2);
                seg.setOriginAirportCode(sal.getAirport2());
                seg.setDestinationAirportCode(sal.getAirport3());
                seg.setCarrierIataNo(sal.getCarrier2());
                seg.setFareBasis(sal.getFareBasis2());
                seg.setFlightNo(sal.getFlightNo2());
                seg.setCouponUseIndi("F");
                list.add(seg);
            } else if ("3".equals(s)){
                seg.setDocumentCarrierIataNo(sal.getAirline3code());
                seg.setDocumentNo(sal.getTicketNo());
                seg.setFirstTicketNo(sal.getFirstTicketNo());
                seg.setIssueDate(sal.getIssueDate());
                seg.setCouponNo(3);
                seg.setOriginAirportCode(sal.getAirport3());
                seg.setDestinationAirportCode(sal.getAirport4());
                seg.setCarrierIataNo(sal.getCarrier3());
                seg.setFareBasis(sal.getFareBasis3());
                seg.setFlightNo(sal.getFlightNo3());
                seg.setCouponUseIndi("F");
                list.add(seg);
            } else if ("4".equals(s)){
                seg.setDocumentCarrierIataNo(sal.getAirline3code());
                seg.setDocumentNo(sal.getTicketNo());
                seg.setFirstTicketNo(sal.getFirstTicketNo());
                seg.setIssueDate(sal.getIssueDate());
                seg.setCouponNo(4);
                seg.setOriginAirportCode(sal.getAirport4());
                seg.setDestinationAirportCode(sal.getAirport5());
                seg.setCarrierIataNo(sal.getCarrier4());
                seg.setFareBasis(sal.getFareBasis4());
                seg.setFlightNo(sal.getFlightNo4());
                seg.setCouponUseIndi("F");
                list.add(seg);
            }
        }
    }

    /**
     * 国际税费映射
     * @param auditorTaxes
     * @param taxIps
     */
    private void addIpTax(List<AuditorTax> auditorTaxes, List<TaxIp> taxIps){
        for(TaxIp ip : taxIps){
            AuditorTax auditorTax = new AuditorTax();
            auditorTax.setDocumentCarrierIataNo(ip.getAirline3code());
            auditorTax.setDocumentNo(ip.getTicketNo());
            auditorTax.setTaxCode(ip.getTaxType());
            auditorTax.setTaxAmount(ip.getTaxAmount());
            auditorTax.setTaxCurrency(ip.getCurrency());
            auditorTaxes.add(auditorTax);
        }
    }
}
