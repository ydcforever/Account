package com.airline.account.utils;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateUtils;

import java.text.ParseException;

/**
 * Created by ydc on 2020/11/29.
 */
public final class EtFormat {

    public static String taxCodeFormat(String taxCode) {
        if(taxCode.contains("XF")){
            return "XF";
        } else {
            return taxCode;
        }
    }

    public static String psgTypeFormat(String psg) {
        switch (psg) {
            case "A":
                return "ADT";
            case "C":
                return "CHD";
            case "I":
                return "INF";
            default:
                return psg;
        }
    }

    public static double numberFormat(String str){
        return StringUtils.isBlank(str) ? 0 : new Double(str);
    }

    public static String fltDateFormat(String date) {
        return date.equals("99999999") ? "30001230" : dateFormat(date, "30001230", "yyyyMMdd");
    }

    private static String dateFormat(String date, String defaultDate, String... parsePatterns) {
        try {
            DateUtils.parseDate(date, parsePatterns);
            return date;
        } catch (ParseException e) {
            return defaultDate;
        }
    }
}
