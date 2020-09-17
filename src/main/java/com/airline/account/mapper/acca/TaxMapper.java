package com.airline.account.mapper.acca;

import com.airline.account.model.acca.Sal;
import com.airline.account.model.acca.TaxDp;
import com.airline.account.model.acca.TaxIp;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/9/17.
 */
@Repository
public interface TaxMapper {

    public List<TaxDp> queryDTaxDp(@Param("sal") Sal cnjSal);

    public List<TaxDp> queryMTaxDp(@Param("sal") Sal cnjSal);

    public List<TaxIp> queryDTaxIp(@Param("sal") Sal cnjSal);

    public List<TaxIp> queryMTaxIp(@Param("sal") Sal cnjSal);

}
