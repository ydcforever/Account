package com.airline.account.prorate;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by ydc on 2020/9/7.
 */
@Data
@NoArgsConstructor
public class SegmentTax {

    private String segNo;

    private String nation;

    private String taxCode;

    private String taxName;

    private Double amount;

    private String saleCur;

    public SegmentTax(String segNo, String taxCode, Double amount) {
        this.segNo = segNo;
        this.taxCode = taxCode;
        this.amount = amount;
    }

    public String key(){
        return taxCode;
    }

    public void addAmt(SegmentTax tax){
        this.amount = tax.amount + amount;
    }
}
