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
import com.airline.account.utils.EtFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional(isolation = Isolation.DEFAULT, propagation= Propagation.REQUIRED, rollbackFor=Exception.class)
    public void moveDIp(Sal cnjSal) throws Exception{
        List<Sal> sals = salMapper.queryDIpSal(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s, "ACCA_IP_D");
                addSeg(segments, cnjSal);
            }
            List<TaxIp> taxIps = taxMapper.queryDTaxIp(cnjSal);
            addIpTax(auditorTaxes, taxIps, sals.get(0).getIssueDate());
            auditorTicketMapper.insertTicket(tickets);
            auditorSegmentMapper.insertSegment(segments);
            if(auditorTaxes.size() > 0) {
                auditorTaxMapper.insertTax(auditorTaxes);
            }
        }
    }

    /**
     * SAL国内日数据迁移
     * @param cnjSal
     */
    @Override
    public void moveDDp(Sal cnjSal) throws Exception {
        List<Sal> sals = salMapper.queryDDpSal(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s, "ACCA_DP_D");
                addSeg(segments, cnjSal);
            }
            List<TaxDp> taxDps = taxMapper.queryDTaxDp(cnjSal);
            addDpTax(auditorTaxes, taxDps, sals.get(0).getIssueDate());
            auditorTicketMapper.insertTicket(tickets);
            auditorSegmentMapper.insertSegment(segments);
            if(auditorTaxes.size() > 0) {
                auditorTaxMapper.insertTax(auditorTaxes);
            }
        }
    }

    /**
     * SAL国际月数据迁移
     * @param cnjSal
     */
    @Override
    public void moveMIp(Sal cnjSal) throws Exception {
        List<Sal> sals = salMapper.queryMIpSal(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s, "ACCA_IP_M");
                addSeg(segments, cnjSal);
            }
            List<TaxIp> taxIps = taxMapper.queryDTaxIp(cnjSal);
            addIpTax(auditorTaxes, taxIps, sals.get(0).getIssueDate());
            auditorTicketMapper.insertTicket(tickets);
            auditorSegmentMapper.insertSegment(segments);
            if(auditorTaxes.size() > 0) {
                auditorTaxMapper.insertTax(auditorTaxes);
            }
        }
    }

    /**
     * SAL国内月数据迁移
     * @param cnjSal
     */
    @Override
    public void moveMDp(Sal cnjSal) throws Exception {
        List<Sal> sals = salMapper.queryMDpSal(cnjSal);
        //连票是否齐全，这里后续添加check的过程
        if(cnjSal.getCnjNo() == sals.size()){
            List<Ticket> tickets = new ArrayList<>();
            List<Segment> segments = new ArrayList<>();
            List<AuditorTax> auditorTaxes = new ArrayList<>();
            for(Sal s : sals) {
                addTicket(tickets, s, "ACCA_DP_M");
                addSeg(segments, cnjSal);
            }
            List<TaxDp> taxDps = taxMapper.queryDTaxDp(cnjSal);
            addDpTax(auditorTaxes, taxDps, sals.get(0).getIssueDate());
            auditorTicketMapper.insertTicket(tickets);
            auditorSegmentMapper.insertSegment(segments);
            if(auditorTaxes.size() > 0) {
                auditorTaxMapper.insertTax(auditorTaxes);
            }
        }
    }

    /**
     * SAL票面映射
     * @param list
     * @param sal
     */
    private void addTicket(List<Ticket> list, Sal sal, String etSource){
        Ticket ticket = new Ticket();
        ticket.setDocumentCarrierIataNo(sal.getAirline3code());
        ticket.setDocumentNo(sal.getTicketNo());
        ticket.setIssueDate(sal.getIssueDate());
        ticket.setDocumentType(sal.getSaleType());
        ticket.setAgentIataNo(sal.getAgentNo());
        ticket.setCnjCurrent(sal.getCnjNo());
        ticket.setConjunctionTicketNo(sal.getFirstTicketNo());
        ticket.setTourCode(sal.getTourCode());
        ticket.setCommissionRate(new Double(sal.getAgentCommissionRate()).doubleValue());
        ticket.setCommissionAmount(new Double(sal.getAgentCommission()).doubleValue());
        ticket.setEndorsementRestriction(sal.getEndorsementRestriction());
        ticket.setEquivalentFarePaid(new Double(sal.getIncomePaxSc()).doubleValue());
        ticket.setEquivalentFareCurrencyCode(sal.getSaleCurrency());
        ticket.setTotalFare(sal.getIncomePaySc());
        ticket.setTotalFareCurrency(sal.getSaleCurrency());
        ticket.setPaxType(EtFormat.psgTypeFormat(sal.getPaxType()));
        ticket.setPaxQty(sal.getPaxQty());
        ticket.setFareCalculationArea(sal.getFca());
        ticket.setPassengerName(sal.getPaxName());
        ticket.setDataSource(sal.getDataSource());
        ticket.setEtSource(etSource);
        ticket.setPnrNo(sal.getPnrNo());
        ticket.setGpFlag(sal.getGpFlag());
        ticket.setAutoTicketFlag(sal.getAutoTicketFlag());
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
    private void addDpTax(List<AuditorTax> auditorTaxes, List<TaxDp> taxDps, String issueDate){
        for(TaxDp dp : taxDps){
            if(dp.getTaxAmount1() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillDpTaxNormal(auditorTax, dp, issueDate);
                auditorTax.setTaxCode(dp.getTaxType());
                auditorTax.setTaxAmount(dp.getTaxAmount1());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount2() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillDpTaxNormal(auditorTax, dp, issueDate);
                auditorTax.setTaxCode(dp.getTaxType2());
                auditorTax.setTaxAmount(dp.getTaxAmount2());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount3() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillDpTaxNormal(auditorTax, dp, issueDate);
                auditorTax.setTaxCode(dp.getTaxType3());
                auditorTax.setTaxAmount(dp.getTaxAmount3());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount4() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillDpTaxNormal(auditorTax, dp, issueDate);
                auditorTax.setTaxCode(dp.getTaxType4());
                auditorTax.setTaxAmount(dp.getTaxAmount4());
                auditorTaxes.add(auditorTax);
            }

            if(dp.getTaxAmount5() != 0){
                AuditorTax auditorTax = new AuditorTax();
                fillDpTaxNormal(auditorTax, dp, issueDate);
                auditorTax.setTaxCode(dp.getTaxType5());
                auditorTax.setTaxAmount(dp.getTaxAmount5());
                auditorTaxes.add(auditorTax);
            }
        }
    }

    private void fillDpTaxNormal(AuditorTax tax, TaxDp dp, String issueDate){
        tax.setDocumentCarrierIataNo(dp.getAirline3code());
        tax.setDocumentNo(dp.getTicketNo());
        tax.setDocumentType(dp.getSaleType());
        tax.setIssueDate(issueDate);
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
                buildSeg4(seg, sal, "F");
                list.add(seg);
            }
        }
    }

    private void buildSeg1(Segment seg, Sal sal, String couponUse){
        fillNormalSeg(seg, sal, couponUse);
        seg.setCouponNo(1);
        seg.setOriginCityCode(sal.getAirport1());
        seg.setDestinationCityCode(sal.getAirport2());
        seg.setCarrierIataNo(sal.getCarrier1());
        seg.setFareBasis(sal.getFareBasis1());
        seg.setFlightNo(sal.getFlightNo1());
        seg.setFlightDate(EtFormat.fltDateFormat(sal.getFlightDt1()));
        seg.setServiceClass(sal.getSubClass1());
    }

    private void buildSeg2(Segment seg, Sal sal, String couponUse){
        fillNormalSeg(seg, sal, couponUse);
        seg.setCouponNo(2);
        seg.setOriginCityCode(sal.getAirport2());
        seg.setDestinationCityCode(sal.getAirport3());
        seg.setCarrierIataNo(sal.getCarrier2());
        seg.setFareBasis(sal.getFareBasis2());
        seg.setFlightNo(sal.getFlightNo2());
        seg.setFlightDate(EtFormat.fltDateFormat(sal.getFlightDt2()));
        seg.setServiceClass(sal.getSubClass2());
    }

    private void buildSeg3(Segment seg, Sal sal, String couponUse){
        fillNormalSeg(seg, sal, couponUse);
        seg.setCouponNo(3);
        seg.setOriginCityCode(sal.getAirport3());
        seg.setDestinationCityCode(sal.getAirport4());
        seg.setCarrierIataNo(sal.getCarrier3());
        seg.setFareBasis(sal.getFareBasis3());
        seg.setFlightNo(sal.getFlightNo3());
        seg.setFlightDate(EtFormat.fltDateFormat(sal.getFlightDt3()));
        seg.setServiceClass(sal.getSubClass3());
    }

    private void buildSeg4(Segment seg, Sal sal, String couponUse){
        fillNormalSeg(seg, sal, couponUse);
        seg.setCouponNo(4);
        seg.setOriginCityCode(sal.getAirport4());
        seg.setDestinationCityCode(sal.getAirport5());
        seg.setCarrierIataNo(sal.getCarrier4());
        seg.setFareBasis(sal.getFareBasis4());
        seg.setFlightNo(sal.getFlightNo4());
        seg.setFlightDate(EtFormat.fltDateFormat(sal.getFlightDt4()));
        seg.setServiceClass(sal.getSubClass4());
    }

    private void fillNormalSeg(Segment seg, Sal sal, String couponUse){
        seg.setDocumentCarrierIataNo(sal.getAirline3code());
        seg.setDocumentNo(sal.getTicketNo());
        seg.setDocumentType(sal.getSaleType());
        seg.setConjunctionTicketNo(sal.getFirstTicketNo());
        seg.setCnjCurrent(sal.getCnjNo());
        seg.setIssueDate(sal.getIssueDate());
        seg.setCouponStatusIndicator("S");
        seg.setValidCouponFlag(couponUse);
    }

    /**
     * 国际税费映射
     * @param auditorTaxes
     * @param taxIps
     */
    private void addIpTax(List<AuditorTax> auditorTaxes, List<TaxIp> taxIps, String issueDate){
        for(TaxIp ip : taxIps){
            AuditorTax auditorTax = new AuditorTax();
            auditorTax.setIssueDate(issueDate);
            auditorTax.setDocumentCarrierIataNo(ip.getAirline3code());
            auditorTax.setDocumentNo(ip.getTicketNo());
            auditorTax.setDocumentType(ip.getSaleType());
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
