package com.airline.account.mapper.procedure;

import com.airline.account.utils.Switch;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

/**
 * Created by ydc on 2020/10/15.
 */
@Repository
@Switch("ydc")
public interface QuerySegmentTaxMapper {

    public void querySegmentTax(HashMap map);

}
