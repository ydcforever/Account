package com.airline.account.model.et;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Segment {

    private String documentCarrierIataNo;

    private String documentNo;

    private String firstTicketNo;

    private Integer couponNo;

    private Integer fcaNo;

    private double fcaAmount;

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

    private String issueDate;

    private String updateDate;

    private String documentType;

    private String couponUseIndi;

    private double cnjCurrent;

    private String departureTerminal;

    private String arrivalTerminal;

    private String involuntaryIndicator;

    private String compartment;

    private String baggageAllowance;

    private String notValidBefore;

    private String notValidAfter;

    private String emdCouponStatus;

    private String optFlightNo;

    private String asrSeat;


    public Segment(String documentCarrierIataNo, String documentNo, Integer couponNo) {
        init();
        this.documentCarrierIataNo = documentCarrierIataNo;
        this.documentNo = documentNo;
        this.couponNo = couponNo;
    }

    public void init() {
        this.documentCarrierIataNo = "";
        this.documentNo = "";
        this.firstTicketNo = "";
        this.couponNo = 0;
        this.fcaNo = 0;
        this.fcaAmount = 0;
        this.departureDate = "";
        this.arriveDate = "";
        this.originAirportCode = "";
        this.destinationAirportCode = "";
        this.carrierIataNo = "";
        this.stopoverIndicator = "";
        this.fareBasis = "";
        this.flightNo = "";
        this.serviceClass = "";
        this.flightDate = "";
        this.couponStatusIndicator = "";
        this.issueDate = "";
        this.updateDate = "";
        this.documentType = "";
        this.couponUseIndi = "";
        this.cnjCurrent = 1;
        this.departureTerminal = "";
        this.arrivalTerminal = "";
        this.involuntaryIndicator = "";
        this.compartment = "";
        this.baggageAllowance = "";
        this.notValidBefore = "";
        this.notValidAfter = "";
        this.emdCouponStatus = "";
        this.optFlightNo = "";
        this.asrSeat = "";
    }
}