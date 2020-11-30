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

    public List<Sal> queryCnj(@Param("table")String table, @Param("begin")String begin, @Param("end")String end);

    public List<Sal> queryCnjByFile(@Param("table")String table, @Param("name")String fileName);

    public List<String> queryFile(@Param("table")String table);

    public List<Sal> queryDIpSal(@Param("sal") Sal cnjSal);

    public List<Sal> queryDDpSal(@Param("sal") Sal cnjSal);

    public List<Sal> queryMIpSal(@Param("sal") Sal cnjSal);

    public List<Sal> queryMDpSal(@Param("sal") Sal cnjSal);

    public Sal testQuery(@Param("sal") Sal cnjSal, @Param("table")String table);

}
