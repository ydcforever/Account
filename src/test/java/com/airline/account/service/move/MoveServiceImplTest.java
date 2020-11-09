package com.airline.account.service.move;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.model.acca.Sal;
import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class MoveServiceImplTest extends TestCase{

    @Autowired
    private MoveService moveService;

    @Autowired
    private SalMapper salMapper;

    @Test
    public void testMoveDIp() throws Exception {
        List<Sal> sals = salMapper.queryCnj("ACCA_SAL_IP_D", "20190330", "20190330");
        for(Sal sal : sals){
            moveService.moveDIp(sal);
        }
    }

    @Test
    public void testMoveDDp() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("3633959119");
        List<Sal> list = salMapper.queryDDpSal(sal);
//        sal.setCnjNo(1);
//        sal.setIssueDate("20190329");
//        sal.setCouponUseIndicator("FVVV");
//        sal.setAirport1("PVG");
//        sal.setAirport2("PEK");
//        Sal cnj = salMapper.testQuery(sal, "ACCA_SAL_DP_D");
//        System.out.println(cnj.toString());
        Sal t = list.get(0);
//        System.out.println(t);
        moveService.moveDDp(t);
    }

    @Test
    public void testMoveMIp() throws Exception {

    }

    @Test
    public void testMoveMDp() throws Exception {

    }
}