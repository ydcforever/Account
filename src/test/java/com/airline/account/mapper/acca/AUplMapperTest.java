package com.airline.account.mapper.acca;

import com.airline.account.model.acca.AUpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class AUplMapperTest {

    @Autowired
    private AUplMapper aUplMapper;

    @Test
    public void testQueryDDpUpl() throws Exception {
        List<AUpl> list = aUplMapper.queryDDpUpl("781", "8286355468", "");
        System.out.println(list);
    }

    @Test
    public void testQueryDIpUpl() throws Exception {
        List<AUpl> list = aUplMapper.queryDIpUpl("781", "2318933817", "");
        System.out.println(list);
    }

    @Test
    public void testQueryMDpUpl() throws Exception {

    }

    @Test
    public void testQueryMIpUpl() throws Exception {

    }
}