package com.airline.account.online;

import com.airline.account.model.et.Segment;
import com.airline.account.ticket.Tax;
import com.airline.account.utils.TaxUtil;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 * 模板类
 */
public class OnlineExchange extends OnlineRefund implements IOnlineExchange {

    /**
     * 改签结果
     * @param list
     * @return
     */
    public List<Tax> exchangeTax(List<Segment> list) {
        List<Tax> taxes = compute();
        List<Tax> org = refundTax(list);
        return TaxUtil.taxCollate(taxes, org);
    }

    @Override
    public List<Tax> compute() {
        return null;
    }
}
