package com.airline.account.mapper.et;

import com.airline.account.model.et.Exchange;
import com.airline.account.model.et.Ticket;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class ExchangeMapperTest {

    @Autowired
    private ExchangeMapper exchangeMapper;

    @Test
    public void testQueryRelation() throws Exception {
        Ticket ticket = new Ticket("781","2", "N" ,"2020-11-10");
        List<Exchange> list = exchangeMapper.queryRelation(ticket);
        System.out.println(list.get(0));
    }
}