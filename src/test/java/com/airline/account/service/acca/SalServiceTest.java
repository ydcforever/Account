package com.airline.account.service.acca;

import com.airline.account.model.acca.Sal;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class SalServiceTest {

    @Autowired
    private SalService salService;

    @Test
    public void testQueryCnj() throws Exception {
        List<Sal> sals = salService.queryCnj("ACCA_SAL_IP_D", "20190330", "20190330");
        System.out.println(sals.size());
    }

    @Test
    public void testQueryCnjByFile() throws Exception {
        List<Sal> sals = salService.queryCnjByFile("ACCA_SAL_IP_D", "D_IP_SAL_20190401.csv");
        System.out.println(sals.size());
    }

    @Test
    public void testQueryDIpSal() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("2314886811");
        List<Sal> cnj = salService.queryDIpSal(sal);
        System.out.println(cnj.size());
    }

    @Test
    public void testQueryDDpSal() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("3633956924");
        List<Sal> cnj = salService.queryDDpSal(sal);
        System.out.println(cnj.get(0).toString());
    }

    @Test
    public void testQueryMIpSal() throws Exception {

    }

    @Test
    public void testQueryMDpSal() throws Exception {

    }

    @Test
    public void testQueryFile() throws Exception {
        List<String> list = salService.queryFile("ACCA_SAL_DP_D");
        System.out.println(list);
    }
}