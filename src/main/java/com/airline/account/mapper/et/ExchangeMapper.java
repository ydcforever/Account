package com.airline.account.mapper.et;

import com.airline.account.model.et.Exchange;
import com.airline.account.model.et.Ticket;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/11/6.
 */
@Repository
public interface ExchangeMapper {

    List<Exchange> queryRelation(Ticket ticket);

}
