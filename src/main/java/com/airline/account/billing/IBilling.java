package com.airline.account.billing;

import com.airline.account.prorate.SegmentTax;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 *
 * 基于承运数据，要求分摊兼容以下两种方式
 */
public interface IBilling {

    /**
     * 连票主票 + 连票位置 + 航段号 定位
     * @param airline
     * @param cnjTicketNo
     * @param cnjCurrent
     * @param segNo
     * @return
     */
    public List<SegmentTax> getSegmentTax(String airline, String cnjTicketNo, String cnjCurrent, Integer ... segNo);

    /**
     * 票号 + 航段号 定位   ACCA承运数据匹配使用
     * @param airline
     * @param ticketNo
     * @param segNo
     * @return
     */
    public List<SegmentTax> getSegmentTax(String airline, String ticketNo, Integer ... segNo);

}
