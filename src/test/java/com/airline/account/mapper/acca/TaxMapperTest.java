package com.airline.account.mapper.acca;

import com.airline.account.model.acca.Sal;
import com.airline.account.model.acca.TaxDp;
import com.airline.account.model.acca.TaxIp;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class TaxMapperTest {

    @Autowired
    private TaxMapper taxMapper;

    @Test
    public void testQueryDTaxDp() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("3637798984");
        List<TaxDp> list = taxMapper.queryDTaxDp(sal);
        System.out.println(list.size());
    }

    @Test
    public void testQueryMTaxDp() throws Exception {

    }

    @Test
    public void testQueryDTaxIp() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("2319430604");
        List<TaxIp> list = taxMapper.queryDTaxIp(sal);
        System.out.println(list.size());
    }

    @Test
    public void testQueryMTaxIp() throws Exception {

    }
}