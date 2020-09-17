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

    //查询某段时间内的主票, 未完成
//    public List<Sal> queryDIpCnj(String begin, String end);
//    public List<Sal> queryDDpCnj(String begin, String end);
//    public List<Sal> queryMIpCnj(String begin, String end);
//    public List<Sal> queryMDpCnj(String begin, String end);

    public List<Sal> queryDIpSal(@Param("sal") Sal cnjSal);

    public List<Sal> queryDDpSal(@Param("sal") Sal cnjSal);

    public List<Sal> queryMIpSal(@Param("sal") Sal cnjSal);

    public List<Sal> queryMDpSal(@Param("sal") Sal cnjSal);

}
