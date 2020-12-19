package com.airline.account.mapper.et;

import com.airline.account.model.et.Ticket;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/9/17.
 */
@Repository
public interface TicketMapper {

    void insertTicket(@Param("list") List<Ticket> ticket);

    Ticket queryTicket(@Param("tkt") Ticket ticket);

}
