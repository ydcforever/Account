package com.airline.account.online;

import com.airline.account.model.et.Segment;
import com.airline.account.ticket.Tax;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 */
public interface IOnlineRefund {

    /**
     * 查询原票相关航段税费 税费负值
     * @param list 原票被改签段
     * @return
     */
    List<Tax> refundTax(List<Segment> list);

    double exchange(double origin, String cur, String salCur, String date);

}
