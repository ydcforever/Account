package com.airline.account.service.acca;

import com.airline.account.mapper.acca.RelationMapper;
import com.airline.account.model.acca.Relation;
import com.airline.account.model.acca.Sal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ydc on 2020/12/18.
 */
@Service
public class RelationServiceImpl implements RelationService {
    @Autowired
    private RelationMapper relationMapper;

    @Override
    public List<Relation> queryExchange(Sal primaryTicket) {
        return relationMapper.queryExchange(primaryTicket);
    }

    @Override
    public List<Relation> queryRefund(String sourceName) {
        return relationMapper.queryRefund(sourceName);
    }

    @Override
    public void updateE(Sal primaryTicket) {
        List<Relation> relations = queryExchange(primaryTicket);
        for(Relation relation : relations){
            String ticketNo = relation.getOrgTicketNo();
            String[] status = relation.getCouponStatus().split("");
            for (String cpnNo : status) {
                if (!"0".equals(cpnNo)) {
                    relationMapper.updateStatus(ticketNo.substring(0, 3), ticketNo.substring(3), Integer.parseInt(cpnNo), "E");
                }
            }
        }
    }

    @Override
    public void updateR(Relation relation) {
        String[] tkts = relation.getTicketNoStr().split(";");
        String[] tktStatus = relation.getCouponStatus().split(";");
        for (int i = 0, len = tktStatus.length; i < len; i++) {
            String[] cpns = tktStatus[i].split("");
            String tkt = tkts[i];
            for (String cpn : cpns) {
                relationMapper.updateStatus(tkt.substring(0, 3), tkt.substring(3), Integer.parseInt(cpn), "R");
            }
        }
    }
}
