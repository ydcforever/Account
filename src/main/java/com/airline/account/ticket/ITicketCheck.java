package com.airline.account.ticket;

/**
 * Created by ydc on 2020/9/7.
 */
public interface ITicketCheck {

    /**
     * 连票完整性检查
     *
     * @return
     */
    public boolean cnjCheck();

    /**
     * 退改签关系检查
     */
    public boolean erCheck();

    /**
     * 原票是否入库
     */
    public boolean orgCheck();
}
