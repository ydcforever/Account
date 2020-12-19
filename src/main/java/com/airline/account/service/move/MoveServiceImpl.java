package com.airline.account.service.move;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.mapper.acca.TaxDIMapper;
import com.airline.account.mapper.et.SegmentMapper;
import com.airline.account.mapper.et.TaxMapper;
import com.airline.account.mapper.et.TicketMapper;
import com.airline.account.model.acca.Sal;
import com.airline.account.model.acca.TaxDp;
import com.airline.account.model.acca.TaxIp;
import com.airline.account.model.et.Segment;
import com.airline.account.model.et.Tax;
import com.airline.account.model.et.Ticket;
import com.airline.account.service.acca.RelationService;
import com.airline.account.utils.EtFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by ydc on 2020/9/17.
 */
@Service
public class MoveServiceImpl implements MoveService {

    @Autowired
    private TicketMapper ticketMapper;

    @Autowired
    private SegmentMapper segmentMapper;

    @Autowired
    private TaxDIMapper taxDIMapper;

    @Autowired
    private SalMapper salMapper;

    @Autowired
    private TaxMapper taxMapper;

    @Autowired
    private RelationService relationService;

    private static boolean isNumber(String str) {
        return str.matches(".*[0-9]+.*");
    }

    /**
     * SAL国际日数据迁移
     */
    @Override
    @Transactional(isolation = Isolation.DEFAULT, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public void moveDIp(Sal cnjSal) throws Exception {
        List<Sal> sals = salMapper.queryDIpSal(cnjSal);
        String cnjTktString = getCnjTktString(sals);
        //连票是否齐全，这里后续添加check的过程
        List<Ticket> tickets = new ArrayList<>();
        List<Segment> segments = new ArrayList<>();
        for (Sal s : sals) {
            addTicket(tickets, s, cnjTktString, "ACCA_IP_D");
            addSeg(segments, s);
        }
        List<TaxIp> taxIps = taxDIMapper.queryDTaxIp(cnjSal);
        List<Tax> taxes = getIpTax(taxIps, cnjSal.getIssueDate());
        ticketMapper.insertTicket(tickets);
        segmentMapper.insertSegment(segments);
        if (taxes.size() > 0) {
            taxMapper.insertTax(taxes);
        }

        if ("E".equals(cnjSal.getSaleType())) {
            relationService.updateE(cnjSal);
        }
    }

    /**
     * SAL国内日数据迁移
     */
    @Override
    @Transactional(isolation = Isolation.DEFAULT, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public void moveDDp(Sal cnjSal) throws Exception {
        List<Sal> sals = salMapper.queryDDpSal(cnjSal);
        String cnjTktString = getCnjTktString(sals);
        //连票是否齐全，这里后续添加check的过程

        List<Ticket> tickets = new ArrayList<>();
        List<Segment> segments = new ArrayList<>();
        for (Sal s : sals) {
            addTicket(tickets, s, cnjTktString, "ACCA_DP_D");
            addSeg(segments, s);
        }
        List<TaxDp> taxDps = taxDIMapper.queryDTaxDp(cnjSal);
        List<Tax> taxes = getDpTax(taxDps, cnjSal.getIssueDate());
        ticketMapper.insertTicket(tickets);
        segmentMapper.insertSegment(segments);
        if (taxes.size() > 0) {
            taxMapper.insertTax(taxes);
        }

        if ("E".equals(cnjSal.getSaleType())) {
            relationService.updateE(cnjSal);
        }
    }

    /**
     * SAL国际月数据迁移
     */
    @Override
    @Transactional(isolation = Isolation.DEFAULT, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public void moveMIp(Sal cnjSal) throws Exception {
        List<Sal> sals = salMapper.queryMIpSal(cnjSal);
        String cnjTktString = getCnjTktString(sals);
        //连票是否齐全，这里后续添加check的过程

        List<Ticket> tickets = new ArrayList<>();
        List<Segment> segments = new ArrayList<>();
        for (Sal s : sals) {
            addTicket(tickets, s, cnjTktString, "ACCA_IP_M");
            addSeg(segments, s);
        }
        List<TaxIp> taxIps = taxDIMapper.queryDTaxIp(cnjSal);
        List<Tax> taxes = getIpTax(taxIps, cnjSal.getIssueDate());
        ticketMapper.insertTicket(tickets);
        segmentMapper.insertSegment(segments);
        if (taxes.size() > 0) {
            taxMapper.insertTax(taxes);
        }

        if ("E".equals(cnjSal.getSaleType())) {
            relationService.updateE(cnjSal);
        }
    }

    /**
     * SAL国内月数据迁移
     */
    @Override
    @Transactional(isolation = Isolation.DEFAULT, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public void moveMDp(Sal cnjSal) throws Exception {
        List<Sal> sals = salMapper.queryMDpSal(cnjSal);
        String cnjTktString = getCnjTktString(sals);
        //连票是否齐全，这里后续添加check的过程

        List<Ticket> tickets = new ArrayList<>();
        List<Segment> segments = new ArrayList<>();
        for (Sal s : sals) {
            addTicket(tickets, s, cnjTktString, "ACCA_DP_M");
            addSeg(segments, s);
        }
        List<TaxDp> taxDps = taxDIMapper.queryDTaxDp(cnjSal);
        List<Tax> taxes = getDpTax(taxDps, cnjSal.getIssueDate());
        ticketMapper.insertTicket(tickets);
        segmentMapper.insertSegment(segments);
        if (taxes.size() > 0) {
            taxMapper.insertTax(taxes);
        }

        if ("E".equals(cnjSal.getSaleType())) {
            relationService.updateE(cnjSal);
        }
    }

    private String getCnjTktString(List<Sal> sals) {
        StringBuilder cnjTktString = new StringBuilder();
        int i = 0;
        for (Sal sal : sals) {
            if (sal.getCnjNo() > 1) {
                if(i > 0) {
                    cnjTktString.append(";");
                }
                cnjTktString.append(sal.getTicketNo());
                i++;
            }
        }
        return cnjTktString.toString();
    }

    /**
     * SAL票面映射
     */
    private void addTicket(List<Ticket> list, Sal sal, String cnjTktString, String etSource) {
        Ticket ticket = new Ticket();
        if (sal.getCnjNo() == 1) {
            ticket.setConjunctionTicketString(cnjTktString);
        }
        ticket.setDocumentCarrierIataNo(sal.getAirline3code());
        ticket.setDocumentNo(sal.getTicketNo());
        ticket.setIssueDate(sal.getIssueDate());
        ticket.setDocumentType(sal.getSaleType());
        ticket.setAgentIataNo(sal.getAgentNo());
        ticket.setCnjCurrent(sal.getCnjNo());
        ticket.setConjunctionTicketNo(sal.getFirstTicketNo());
        ticket.setTourCode(sal.getTourCode());
        ticket.setCommissionRate(EtFormat.numberFormat(sal.getAgentCommissionRate()));
        ticket.setCommissionAmount(EtFormat.numberFormat(sal.getAgentCommission()));
        ticket.setEndorsementRestriction(sal.getEndorsementRestriction());
        ticket.setEquivalentFarePaid(EtFormat.numberFormat(sal.getIncomePaxSc()));
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

    private void addSeg(List<Segment> list, Sal sal) {
        if (isNumber(sal.getCouponUseIndicator())) {
            addNumberSeg(list, sal);
        } else {
            addCharSeg(list, sal);
        }
    }

    /**
     * 国内航段映射
     */
    private void addCharSeg(List<Segment> list, Sal sal) {
        String[] status = sal.getCouponUseIndicator().split("");
        for (int i = 0, len = status.length; i < len; i++) {
            if (!"V".equals(status[i])) {
                if (i == 0) {
                    Segment seg = buildSeg1(sal, status[i]);
                    list.add(seg);
                } else if (i == 1) {
                    Segment seg = buildSeg2(sal, status[i]);
                    list.add(seg);
                } else if (i == 2) {
                    Segment seg = buildSeg3(sal, status[i]);
                    list.add(seg);
                } else if (i == 3) {
                    Segment seg = buildSeg4(sal, status[i]);
                    list.add(seg);
                }
            }
        }
    }

    /**
     * 国内税费映射
     */
    private List<Tax> getDpTax(List<TaxDp> taxDps, String issueDate) {
        List<Tax> taxes = new ArrayList<>();
        for (TaxDp dp : taxDps) {
            if (dp.getTaxAmount1() != 0) {
                Tax tax = new Tax();
                fillDpTaxNormal(tax, dp, issueDate);
                tax.setTaxCode(dp.getTaxType());
                tax.setTaxAmount(dp.getTaxAmount1());
                taxes.add(tax);
            }

            if (dp.getTaxAmount2() != 0) {
                Tax tax = new Tax();
                fillDpTaxNormal(tax, dp, issueDate);
                tax.setTaxCode(dp.getTaxType2());
                tax.setTaxAmount(dp.getTaxAmount2());
                taxes.add(tax);
            }

            if (dp.getTaxAmount3() != 0) {
                Tax tax = new Tax();
                fillDpTaxNormal(tax, dp, issueDate);
                tax.setTaxCode(dp.getTaxType3());
                tax.setTaxAmount(dp.getTaxAmount3());
                taxes.add(tax);
            }

            if (dp.getTaxAmount4() != 0) {
                Tax tax = new Tax();
                fillDpTaxNormal(tax, dp, issueDate);
                tax.setTaxCode(dp.getTaxType4());
                tax.setTaxAmount(dp.getTaxAmount4());
                taxes.add(tax);
            }

            if (dp.getTaxAmount5() != 0) {
                Tax tax = new Tax();
                fillDpTaxNormal(tax, dp, issueDate);
                tax.setTaxCode(dp.getTaxType5());
                tax.setTaxAmount(dp.getTaxAmount5());
                taxes.add(tax);
            }
        }
        return taxes;
    }

    private void fillDpTaxNormal(Tax tax, TaxDp dp, String issueDate) {
        tax.setDocumentCarrierIataNo(dp.getAirline3code());
        tax.setDocumentNo(dp.getTicketNo());
        tax.setDocumentType(dp.getSaleType());
        tax.setIssueDate(issueDate);
        tax.setTaxCurrency(dp.getCurrency());
    }

    private void addNumberSeg(List<Segment> list, Sal sal) {
        String[] status = sal.getCouponUseIndicator().split("");
        for (String s : status) {
            if ("1".equals(s)) {
                Segment seg = buildSeg1(sal, "F");
                list.add(seg);
            } else if ("2".equals(s)) {
                Segment seg = buildSeg2(sal, "F");
                list.add(seg);
            } else if ("3".equals(s)) {
                Segment seg = buildSeg3(sal, "F");
                list.add(seg);
            } else if ("4".equals(s)) {
                Segment seg = buildSeg4(sal, "F");
                list.add(seg);
            }
        }
    }

    private Segment buildSeg1(Sal sal, String couponUse) {
        Segment seg = new Segment();
        fillNormalSeg(seg, sal, couponUse);
        seg.setCouponNo(1);
        seg.setOriginCityCode(sal.getAirport1());
        seg.setDestinationCityCode(sal.getAirport2());
        if (couponUse.equals("F")) {
            seg.setCarrierIataNo(sal.getCarrier1());
            seg.setFareBasis(sal.getFareBasis1());
            seg.setFlightNo(sal.getFlightNo1());
            seg.setFlightDate(EtFormat.fltDateFormat(sal.getFlightDt1()));
            seg.setServiceClass(sal.getSubClass1());
        }
        return seg;
    }

    private Segment buildSeg2(Sal sal, String couponUse) {
        Segment seg = new Segment();
        fillNormalSeg(seg, sal, couponUse);
        seg.setCouponNo(2);
        seg.setOriginCityCode(sal.getAirport2());
        seg.setDestinationCityCode(sal.getAirport3());
        if (couponUse.equals("F")) {
            seg.setCarrierIataNo(sal.getCarrier2());
            seg.setFareBasis(sal.getFareBasis2());
            seg.setFlightNo(sal.getFlightNo2());
            seg.setFlightDate(EtFormat.fltDateFormat(sal.getFlightDt2()));
            seg.setServiceClass(sal.getSubClass2());
        }
        return seg;
    }

    private Segment buildSeg3(Sal sal, String couponUse) {
        Segment seg = new Segment();
        fillNormalSeg(seg, sal, couponUse);
        seg.setCouponNo(3);
        seg.setOriginCityCode(sal.getAirport3());
        seg.setDestinationCityCode(sal.getAirport4());
        if (couponUse.equals("F")) {
            seg.setCarrierIataNo(sal.getCarrier3());
            seg.setFareBasis(sal.getFareBasis3());
            seg.setFlightNo(sal.getFlightNo3());
            seg.setFlightDate(EtFormat.fltDateFormat(sal.getFlightDt3()));
            seg.setServiceClass(sal.getSubClass3());
        }
        return seg;
    }

    private Segment buildSeg4(Sal sal, String couponUse) {
        Segment seg = new Segment();
        fillNormalSeg(seg, sal, couponUse);
        seg.setCouponNo(4);
        seg.setOriginCityCode(sal.getAirport4());
        seg.setDestinationCityCode(sal.getAirport5());
        if (couponUse.equals("F")) {
            seg.setCarrierIataNo(sal.getCarrier4());
            seg.setFareBasis(sal.getFareBasis4());
            seg.setFlightNo(sal.getFlightNo4());
            seg.setFlightDate(EtFormat.fltDateFormat(sal.getFlightDt4()));
            seg.setServiceClass(sal.getSubClass4());
        }
        return seg;
    }

    private void fillNormalSeg(Segment seg, Sal sal, String couponUse) {
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
     */
    private List<Tax> getIpTax(List<TaxIp> taxIps, String issueDate) {
        List<Tax> taxes = new ArrayList<>();
        Map<String, Tax> map = new HashMap<>(taxIps.size());
        for (TaxIp ip : taxIps) {
            Tax tax = new Tax();
            tax.setIssueDate(issueDate);
            tax.setDocumentCarrierIataNo(ip.getAirline3code());
            tax.setDocumentNo(ip.getTicketNo());
            tax.setDocumentType(ip.getSaleType());
            tax.setTaxAmount(ip.getTaxAmount());
            tax.setTaxCurrency(ip.getCurrency());
            String taxCode = EtFormat.taxCodeFormat(ip.getTaxType());
            tax.setTaxCode(taxCode);
            if (taxCode.equals("FR")) {
                tax.setTaxSeqNo(taxes.size() + 1);
                taxes.add(tax);
            } else {
                Tax tax1 = map.get(taxCode);
                if (tax1 == null) {
                    tax.setTaxSeqNo(1);
                    map.put(taxCode, tax);
                } else {
                    tax1.setTaxAmount(tax1.getTaxAmount() + ip.getTaxAmount());
                }
            }
        }
        taxes.addAll(map.values());
        return taxes;
    }
}
