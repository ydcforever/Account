package com.airline.account.model.et;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by ydc on 2020/11/20.
 */
@Data
@NoArgsConstructor
public class SegmentTax {

    private String documentCarrierIataNo;

    private String conjunctionTicketNo;

    private Integer cnjCurrent;

    private String documentNo;

    private String issueDate;

    private Integer couponNo;

    private String feeCode;

    private double feeAmount;

    private String saleCurrency;

    private Integer prorateNo;

    private String prorateUnionNo;

    private double unionAmount;

    private String couponStatus;

    private String optCarrier;

    private String taxInterlinableFlag;

    private String prorateTime;

    private String mktCarrier;

}
