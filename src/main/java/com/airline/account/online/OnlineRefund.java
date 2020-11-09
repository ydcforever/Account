package com.airline.account.online;

import com.airline.account.model.et.Segment;
import com.airline.account.ticket.Tax;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 * 模板类
 */
public class OnlineRefund implements IOnlineRefund {

    /**
     * 退票结果
     * @param list 原票被改签段
     * @return
     */
    @Override
    public List<Tax> refundTax(List<Segment> list) {
        return null;
    }

    @Override
    public double exchange(double origin, String cur, String salCur, String date) {
        return 0;
    }
}
