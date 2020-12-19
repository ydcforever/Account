package com.airline.account.mapper.et;

import com.airline.account.model.et.Ticket;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TicketMapperTest {

    @Autowired
    private TicketMapper ticketMapper;

    @Test
    public void testInsertTicket() throws Exception {
        List<Ticket> list = new ArrayList<>();
        Ticket ticket = new Ticket("781","001", "N", "20200910");
        list.add(ticket);
        ticketMapper.insertTicket(list);
    }

    @Test
    public void testQueryTicket() throws Exception {
        Ticket ticket = new Ticket("781","001", "N", "2020-09-10");
        Ticket a = ticketMapper.queryTicket(ticket);
        System.out.println(a.getIssueDate());
    }
}