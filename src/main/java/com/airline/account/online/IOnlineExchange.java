package com.airline.account.online;

import com.airline.account.ticket.Tax;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 */
public interface IOnlineExchange extends IOnlineRefund {

    /**
     * 新票计算
     * @return
     */
    public List<Tax> compute();

}
