package com.airline.account.mapper.acca;

import com.airline.account.model.acca.Pra;
import com.airline.account.model.acca.Sal;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/12/1.
 */
@Repository
public interface PraMapper {

    List<Pra> queryDDpPra(@Param("sal")Sal sal);

    List<Pra> queryDIpPra(@Param("sal")Sal sal);

}
