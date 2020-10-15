package com.airline.account.service.move;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.mapper.acca.TaxMapper;
import com.airline.account.mapper.et.AuditorSegmentMapper;
import com.airline.account.mapper.et.AuditorTaxMapper;
import com.airline.account.mapper.et.AuditorTicketMapper;
import com.airline.account.model.acca.Sal;
import com.airline.account.model.acca.TaxDp;
import com.airline.account.model.acca.TaxIp;
import com.airline.account.model.et.AuditorTax;
import com.airline.account.model.et.Segment;
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
        List<Sal> sals = salMapper.queryDIpSal(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s);
                addSeg(segments, cnjSal);
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
        List<Sal> sals = salMapper.queryDDpSal(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s);
                addSeg(segments, cnjSal);
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
        List<Sal> sals = salMapper.queryMIpSal(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s);
                addSeg(segments, cnjSal);
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
        List<Sal> sals = salMapper.queryMDpSal(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s);
                addSeg(segments, cnjSal);
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
        ticket.setIssueDate(sal.getIssueDate());
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

    private void addSeg(List<Segment> list, Sal sal){
        if(isNumber(sal.getCouponUseIndicator())){
            addIpSeg(list, sal);
        } else {
            addDpSeg(list, sal);
        }
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
                if (i == 0) {
                    buildSeg1(seg, sal, status[i]);
                    list.add(seg);
                } else if (i == 1){
                    buildSeg2(seg, sal, status[i]);
                    list.add(seg);
                } else if (i == 2){
                    buildSeg3(seg, sal, status[i]);
                    list.add(seg);
                } else if(i == 3){
                    buildSeg4(seg, sal, status[i]);
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
                fillNormalTax(auditorTax, dp);
                auditorTax.setTaxCode(dp.getTaxType());
                auditorTax.setTaxAmount(dp.getTaxAmount1());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount2() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillNormalTax(auditorTax, dp);
                auditorTax.setTaxCode(dp.getTaxType2());
                auditorTax.setTaxAmount(dp.getTaxAmount2());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount3() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillNormalTax(auditorTax, dp);
                auditorTax.setTaxCode(dp.getTaxType3());
                auditorTax.setTaxAmount(dp.getTaxAmount3());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount4() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillNormalTax(auditorTax, dp);
                auditorTax.setTaxCode(dp.getTaxType4());
                auditorTax.setTaxAmount(dp.getTaxAmount4());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount5() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillNormalTax(auditorTax, dp);
                auditorTax.setTaxCode(dp.getTaxType5());
                auditorTax.setTaxAmount(dp.getTaxAmount5());
                auditorTaxes.add(auditorTax);
            }
        }
    }

    private void fillNormalTax(AuditorTax tax, TaxDp dp){
        tax.setDocumentCarrierIataNo(dp.getAirline3code());
        tax.setDocumentNo(dp.getTicketNo());
        tax.setDocumentType(dp.getSaleType());
        tax.setTaxCurrency(dp.getCurrency());
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
                buildSeg1(seg, sal, "F");
                list.add(seg);
            } else if ("2".equals(s)){
                buildSeg2(seg, sal, "F");
                list.add(seg);
            } else if ("3".equals(s)){
                buildSeg3(seg, sal, "F");
                list.add(seg);
            } else if ("4".equals(s)){
                fillNormalSeg(seg, sal);
                buildSeg4(seg, sal, "F");
                list.add(seg);
            }
        }
    }

    private void buildSeg1(Segment seg, Sal sal, String couponUse){
        fillNormalSeg(seg, sal);
        seg.setCouponNo(1);
        seg.setOriginAirportCode(sal.getAirport1());
        seg.setDestinationAirportCode(sal.getAirport2());
        seg.setCarrierIataNo(sal.getCarrier1());
        seg.setFareBasis(sal.getFareBasis1());
        seg.setFlightNo(sal.getFlightNo1());
        seg.setServiceClass(sal.getSubClass1());
        seg.setCouponUseIndi(couponUse);
    }

    private void buildSeg2(Segment seg, Sal sal, String couponUse){
        fillNormalSeg(seg, sal);
        seg.setCouponNo(2);
        seg.setOriginAirportCode(sal.getAirport2());
        seg.setDestinationAirportCode(sal.getAirport3());
        seg.setCarrierIataNo(sal.getCarrier2());
        seg.setFareBasis(sal.getFareBasis2());
        seg.setFlightNo(sal.getFlightNo2());
        seg.setServiceClass(sal.getSubClass2());
        seg.setCouponUseIndi(couponUse);
    }

    private void buildSeg3(Segment seg, Sal sal, String couponUse){
        fillNormalSeg(seg, sal);
        seg.setCouponNo(3);
        seg.setOriginAirportCode(sal.getAirport3());
        seg.setDestinationAirportCode(sal.getAirport4());
        seg.setCarrierIataNo(sal.getCarrier3());
        seg.setFareBasis(sal.getFareBasis3());
        seg.setFlightNo(sal.getFlightNo3());
        seg.setServiceClass(sal.getSubClass3());
        seg.setCouponUseIndi(couponUse);
    }

    private void buildSeg4(Segment seg, Sal sal, String couponUse){
        fillNormalSeg(seg, sal);
        seg.setCouponNo(4);
        seg.setOriginAirportCode(sal.getAirport4());
        seg.setDestinationAirportCode(sal.getAirport5());
        seg.setCarrierIataNo(sal.getCarrier4());
        seg.setFareBasis(sal.getFareBasis4());
        seg.setFlightNo(sal.getFlightNo4());
        seg.setServiceClass(sal.getSubClass4());
        seg.setCouponUseIndi(couponUse);
    }

    private void fillNormalSeg(Segment seg, Sal sal){
        seg.setDocumentCarrierIataNo(sal.getAirline3code());
        seg.setDocumentNo(sal.getTicketNo());
        seg.setFirstTicketNo(sal.getFirstTicketNo());
        seg.setIssueDate(sal.getIssueDate());
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

    private static boolean isNumber(String str){
        return str.matches(".*[0-9]+.*");
    }
}
