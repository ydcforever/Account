package com.airline.account.model.acca;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by ydc on 2020/12/18.
 */
@Data
@NoArgsConstructor
public class Relation {

    private String primaryTicketNo;

    private String cnjNo;

    //退票独有
    private String ticketNoStr;

    private String issueDate;

    private String orgTicketNo;

    //退票是4联，改签一联
    private String couponStatus;

    private String orgIssueDate;
}
