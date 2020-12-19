package com.airline.account.model.acca;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by ydc on 2020/12/1.
 */
@Data
@NoArgsConstructor
public class Pra {
    private String dataType;

    private String srcSystem;

    private String praMonth;

    private String praDate;

    private String voucherCarrier;

    private String ticketNo;

    private Integer couponNo;

    private String saleType;

    private String ticketType;

    private String ticketDate;

    private String agentNo;

    private String marketCarrier;

    private String flightNo;

    private String flightDate;

    private String oriAirport;

    private String destAirpot;

    private String cabin;

    private String subClass;

    private String fareBasis;

    private double paxNum;

    private double praNetRevenue;

    private double agentCommission;

    private double agentExCommission;

    private double taxCn;

    private double taxYq;

    private String spaCode;

    private String scheduleCarrierCd;

    private String scheduleFltNbr;

    private String saleCurrencyCd;

    private double aviationInsurance;

    private double praIncome;

    private String sourceName;
}
