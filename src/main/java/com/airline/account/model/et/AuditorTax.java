package com.airline.account.model.et;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by ydc on 2020/9/7.
 */
@Data
@NoArgsConstructor
public class AuditorTax {

    private String documentNo;

    private String documentCarrierIataNo;

    private String documentType;

    private String issueDate;

    private String taxCode;

    private String taxAlreadyPaidFlag;

    private double taxAmount;

    private String taxCurrency;

    private String taxSeqNbr;
}
