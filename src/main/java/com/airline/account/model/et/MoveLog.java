package com.airline.account.model.et;

import lombok.Data;
import org.apache.commons.lang.StringUtils;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by ydc on 2020/11/26.
 */
@Data
public class MoveLog {

    private String airlineCode;

    private String firstTicketNo;

    private String excp;

    private String createTime;

    private static final SimpleDateFormat SDF_HMS = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public MoveLog(String airlineCode, String firstTicketNo, String excp) {
        this.airlineCode = airlineCode;
        this.firstTicketNo = firstTicketNo;
        this.excp = StringUtils.isBlank(excp) ? "" : excp.length() > 2000 ? excp.substring(0, 2000) : excp;
        this.createTime = SDF_HMS.format(new Date());
    }
}
