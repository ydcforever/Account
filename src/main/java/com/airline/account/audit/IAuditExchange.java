package com.airline.account.audit;

import com.airline.account.ticket.Exchange;
import com.airline.account.ticket.Tax;
import com.airline.account.ticket.Ticket;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 */
public interface IAuditExchange{

    /**
     * 查询改签关系
     * @param ticket 改签票
     * @return
     */
    List<Exchange> queryRelation(Ticket ticket);


    /**
     * 查询原票相关航段税费
     * @param list 改签关系
     * @return
     */
    List<Tax> queryOrgTax(List<Exchange> list);
}
