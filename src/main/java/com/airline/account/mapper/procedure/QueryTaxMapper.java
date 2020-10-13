package com.airline.account.mapper.procedure;

import com.airline.account.utils.DDS;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

/**
 * Created by ydc on 2019/5/17.
 */
@Repository
@DDS("ydc")
public interface QueryTaxMapper {
    public void queryTax(HashMap map);
}
