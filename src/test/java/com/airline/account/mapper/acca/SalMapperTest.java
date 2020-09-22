package com.airline.account.mapper.acca;

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
public class SalMapperTest extends TestCase {

    @Autowired
    private SalMapper salMapper;

    @Test
    public void testQueryDIpSal() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("2314886811");
        List<Sal> cnj = salMapper.queryDIpSal(sal);
        System.out.println(cnj.size());
    }

    @Test
    public void testQueryDDpSal() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("3633956924");
        List<Sal> cnj = salMapper.queryDDpSal(sal);
        System.out.println(cnj.get(0).toString());
    }

    @Test
    public void testQueryMIpSal() throws Exception {

    }


    @Test
    public void testQueryMDpSal() throws Exception {

    }
}