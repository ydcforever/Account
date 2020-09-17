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

    public List<Sal> queryDIpCnj(@Param("sal") Sal cnjSal);

    public List<Sal> queryDDpCnj(@Param("sal") Sal cnjSal);

    public List<Sal> queryMIpCnj(@Param("sal") Sal cnjSal);

    public List<Sal> queryMDpCnj(@Param("sal") Sal cnjSal);

    public void moveIp(Sal sal);

    public void moveDp(Sal sal);
}
