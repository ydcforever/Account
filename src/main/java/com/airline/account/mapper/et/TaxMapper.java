package com.airline.account.mapper.et;

import com.airline.account.model.et.Tax;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/9/17.
 */
@Repository
public interface TaxMapper {

    void insertTax(@Param("list") List<Tax> tax);

    void deleteTax(Tax tax);

    void updateTax(Tax tax);
}
