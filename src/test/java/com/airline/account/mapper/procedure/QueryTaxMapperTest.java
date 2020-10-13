package com.airline.account.mapper.procedure;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.HashMap;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class QueryTaxMapperTest {

    @Autowired
    private QueryTaxMapper queryTaxMapper;

    @Test
    public void testQueryTax() throws Exception {
        HashMap<String, Object> k = new HashMap<>();
        queryTaxMapper.queryTax(k);
    }
}