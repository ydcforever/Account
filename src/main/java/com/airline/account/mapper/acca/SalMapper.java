package com.airline.account.mapper.acca;

import com.airline.account.model.acca.Sal;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/9/17.
 */
@Repository
public interface SalMapper {

    List<Sal> queryPrimaryByFile(@Param("table") String table, @Param("name") String fileName);

    List<String> querySourceName(@Param("table") String table);

    List<Sal> queryDIpSal(Sal cnjSal);

    List<Sal> queryDDpSal(Sal cnjSal);

    List<Sal> queryMIpSal(Sal cnjSal);

    List<Sal> queryMDpSal(Sal cnjSal);

}
