package com.airline.account.service.acca;

import com.airline.account.model.acca.Relation;
import com.airline.account.model.acca.Sal;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ydc on 2020/12/18.
 */
@Service
public interface RelationService {

    List<Relation> queryExchange(Sal primaryTicket);

    List<Relation> queryRefund(String sourceName);

    void updateE(Sal primaryTicket);

    void updateR(Relation relation);
}

