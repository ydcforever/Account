package com.airline.account.mapper.et;

import com.airline.account.model.et.Upl;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/12/2.
 */
@Repository
public interface UplMapper {

    void insertUpl(List<Upl> list);

}
