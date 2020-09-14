package com.airline.account.ticket;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Segment {

    private String documentCarrierIataNo;

    private String documentNo;

    private String firstTicketNo;

    private Integer couponNo;

    private String fcaNo;

    private String fcaAmount;

    private String departureDate;

    private String arriveDate;

    private String originAirportCode;

    private String destinationAirportCode;

    private String carrierIataNo;

    private String stopoverIndicator;

    private String fareBasis;

    private String flightNo;

    private String serviceClass;

    private String flightDate;

    private String couponStatusIndicator;

    private String couponBonusFlag;

    private String bonusFareAmount;

    private String bonusCurrency;

    private String tpm;

    private String icer;

    private String createDate;

    private String couponPointAmount;

    private String issueDate;

    private String updateDate;

    private String documentType;

    private String couponUseIndi;

    private String cnjCurrent;

    private String bonusYqAmount;

    private String bonusObAmount;

    public Segment(String documentCarrierIataNo, String documentNo, Integer couponNo) {
        this.documentCarrierIataNo = documentCarrierIataNo;
        this.documentNo = documentNo;
        this.couponNo = couponNo;
    }
}