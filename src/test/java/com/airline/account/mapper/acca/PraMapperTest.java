package com.airline.account.mapper.acca;

import com.airline.account.model.acca.Pra;
import com.airline.account.model.acca.Sal;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class PraMapperTest {

    @Autowired
    private PraMapper praMapper;

    @Test
    public void testQueryDDpPra() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("3637854310");
        sal.setIssueDate("20190329");
        List<Pra> pras =  praMapper.queryDDpPra(sal);
        System.out.println(pras);
    }

    @Test
    public void testQueryIDpPra() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("2318689232");
        sal.setIssueDate("20190330");
        List<Pra> pras =  praMapper.queryDIpPra(sal);
        System.out.println(pras);
    }
}