package com.airline.account.prorate;

import java.util.Map;

/**
 * Created by ydc on 2020/9/7.
 */
public interface IProrateComponent {

    /**
     * SPA -> proviso -> tpm
     * @param map
     * @param tax
     */
    public void doWith(Map<String, Map<String, SegmentTax>> map, SegmentTax tax);

}
