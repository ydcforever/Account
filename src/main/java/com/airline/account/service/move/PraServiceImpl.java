package com.airline.account.service.move;

import com.airline.account.mapper.acca.PraMapper;
import com.airline.account.mapper.et.SegmentTaxMapper;
import com.airline.account.model.acca.Pra;
import com.airline.account.model.acca.Sal;
import com.airline.account.model.et.SegmentTax;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ydc on 2020/12/1.
 */
@Service
public class PraServiceImpl implements PraService {

    @Autowired
    private PraMapper praMapper;

    @Autowired
    private SegmentTaxMapper segmentTaxMapper;

    @Override
    public void moveDDpPra(Sal sal) {
        List<Pra> pras = praMapper.queryDDpPra(sal);
        List<SegmentTax> segmentTaxes = exchange(pras, sal);
        segmentTaxMapper.insertSegmentTax(segmentTaxes);
    }

    @Override
    public void moveDIpPra(Sal sal) {
        List<Pra> pras = praMapper.queryDIpPra(sal);
        List<SegmentTax> segmentTaxes = exchange(pras, sal);
        segmentTaxMapper.insertSegmentTax(segmentTaxes);
    }

    private List<SegmentTax> exchange(List<Pra> pras, Sal sal) {
        List<SegmentTax> list = new ArrayList<>();
        for (Pra pra : pras) {
            SegmentTax tax = getSegmentTax(pra, sal);
            tax.setFeeCode("TAX");
            tax.setFeeAmount(pra.getTaxCn());
            list.add(tax);
            SegmentTax yq = getSegmentTax(pra, sal);
            yq.setFeeCode("YQ");
            yq.setFeeAmount(pra.getTaxYq());
            list.add(yq);
        }
        return list;
    }

    private SegmentTax getSegmentTax(Pra pra, Sal sal) {
        SegmentTax segmentTax = new SegmentTax();
        segmentTax.setDocumentCarrierIataNo(sal.getAirline3code());
        segmentTax.setConjunctionTicketNo(sal.getFirstTicketNo());
        segmentTax.setCnjCurrent(sal.getCnjNo());
        segmentTax.setIssueDate(sal.getIssueDate());
        segmentTax.setDocumentNo(pra.getTicketNo());
        Integer cpnNo = pra.getCouponNo();
        switch (cpnNo) {
            case 1:
                segmentTax.setOptCarrier(sal.getCarrier1());
                break;
            case 2:
                segmentTax.setOptCarrier(sal.getCarrier2());
                break;
            case 3:
                segmentTax.setOptCarrier(sal.getCarrier3());
                break;
            case 4:
                segmentTax.setOptCarrier(sal.getCarrier4());
                break;
            default:
                segmentTax.setOptCarrier(pra.getMarketCarrier());
        }
        segmentTax.setMktCarrier(pra.getMarketCarrier());
        segmentTax.setProrateTime(pra.getPraDate());
        segmentTax.setCouponNo(cpnNo);
        segmentTax.setSaleCurrency(pra.getSaleCurrencyCd());
        return segmentTax;
    }
}
