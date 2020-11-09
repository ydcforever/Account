package com.airline.account.report;

import com.airline.account.ticket.Tax;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 */
public interface ITaxReport {

    /**
     * 指定时间段内，应缴税费值
     * @param nation
     * @param taxCode
     * @param begin
     * @param end
     * @return 带有航段信息的报表
     */
    public List<Tax> doReport(String nation, String taxCode, String begin, String end);

}
