package com.airline.account.model.et;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by ydc on 2020/9/7.
 */
@Data
@NoArgsConstructor
public class AuditorTax {
    private String documentCarrierIataNo;

    private String documentNo;

    private String documentType;

    private String issueDate;

    private String taxCode;

    private String taxAlreadyPaidFlag;

    private double taxAmount;

    private String taxCurrency;

    private Integer taxSeqNbr;

    public AuditorTax(String documentCarrierIataNo, String documentNo, String issueDate, String taxCode, double taxAmount) {
        this.documentCarrierIataNo = documentCarrierIataNo;
        this.documentNo = documentNo;
        this.issueDate = issueDate;
        this.taxCode = taxCode;
        this.taxAmount = taxAmount;
    }
}
