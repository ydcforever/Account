package com.airline.account.mapper.et;

import com.airline.account.model.et.MoveLog;
import org.springframework.stereotype.Repository;

/**
 * Created by ydc on 2020/11/26.
 */
@Repository
public interface MoveLogMapper {

     void insertLog(MoveLog moveLog);

}
