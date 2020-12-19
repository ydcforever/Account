package com.airline.account.online;

import com.airline.account.model.et.Segment;
import com.airline.account.ticket.ETax;
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
    public List<ETax> exchangeTax(List<Segment> list) {
        List<ETax> taxes = compute();
        List<ETax> org = refundTax(list);
        return TaxUtil.taxCollate(taxes, org);
    }

    @Override
    public List<ETax> compute() {
        return null;
    }
}
