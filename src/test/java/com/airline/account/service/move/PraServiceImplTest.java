package com.airline.account.service.move;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.model.acca.Sal;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class PraServiceImplTest {

    @Autowired
    private SalMapper salMapper;

    @Autowired
    private PraService praService;

    @Test
    public void testMoveDDpPra() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("3637854310");
        sal.setIssueDate("20190329");
//        Sal s = salMapper.testQuery(sal, "ACCA_SAL_DP_D");
//        praService.moveDDpPra(s);
    }

    @Test
    public void testMoveDIpPra() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("2318689232");
        sal.setIssueDate("20190330");
//        Sal s = salMapper.testQuery(sal, "ACCA_SAL_IP_D");
//        praService.moveDIpPra(s);
    }
}