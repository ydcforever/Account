package com.airline.account.audit;

import com.airline.account.mapper.et.AuditorExchangeMapper;
import com.airline.account.mapper.et.ProrateMapper;
import com.airline.account.model.et.Exchange;
import com.airline.account.model.et.Ticket;
import com.airline.account.ticket.Tax;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ydc on 2020/11/6.
 */
@Service
public class ExchangeAudit extends AbstractAudit implements IAuditExchange {

    @Autowired
    private AuditorExchangeMapper mapper;

    @Autowired
    private ProrateMapper prorateMapper;


    @Override
    public List<Exchange> queryRelation(Ticket ticket) {
        return mapper.queryRelation(ticket);
    }

    @Override
    public List<Tax> queryOrgTax(List<Exchange> list) {
        return null;
    }
}
