package com.airline.account.online;

import com.airline.account.ticket.ETax;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 */
public interface IOnlineExchange{

    /**
     * 新票计算
     * @return
     */
    public List<ETax> compute();

}
