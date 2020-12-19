package com.airline.account.mapper.acca;

import com.airline.account.model.acca.Relation;
import com.airline.account.model.acca.Sal;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/12/18.
 */
@Repository
public interface RelationMapper {

    List<Relation> queryExchange(Sal primaryTicket);


    List<Relation> queryRefund(String sourceName);

    void updateStatus(@Param("cxr") String documentCarrierIataNo, @Param("docNo") String documentNo, @Param("cpnNo") Integer couponNo, @Param("status") String status);
}
