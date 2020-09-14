package com.airline.account.ticket;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Ticket {

    private String documentCarrierIataNo;

    private String documentNo;

    private String documentType;

    private String issueDate;

    private String agentIataNo;

    private String transactionCode;

    private String couponUseIndicator;

    private String conjunctionTicketIndicator;

    private String conjunctionTicketString;

    private String cnjCurrent;

    private String cnjTotal;

    private String firstTicketNo;

    private String tourCode;

    private String internationalSaleIndicator;

    private String commissionRate;

    private String commissionAmount;

    private String originalIssueDocumentNo;

    private String originalIssueDate;

    private String endorsementRestriction;

    private String fare;

    private String fareCurrencyCode;

    private String equivalentFarePaid;

    private String equivalentFareCurrencyCode;

    private String totalFare;

    private String totalFareCurrency;

    private String passengerName;

    private String paxType;

    private String ticketSource;

    private String officeId;

    private String nationFlag;

    private String gdsCd;

    private String createDate;

    private String proratedFlag;

    private String proratedDate;

    private String exceptionFlag;

    private String manualOperationFlag;

    private String itFlag;

    private String updateDate;

    private String updateId;

    private String fareCalculationArea;
}