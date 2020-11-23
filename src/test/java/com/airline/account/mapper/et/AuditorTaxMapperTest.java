package com.airline.account.mapper.et;

import com.airline.account.model.et.AuditorTax;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class AuditorTaxMapperTest {

    @Autowired
    private AuditorTaxMapper auditorTaxMapper;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Test
    public void testInsertTax() throws Exception {
        List<AuditorTax> list = new ArrayList<>();
        list.add(new AuditorTax("781", "001", "20200910", "CN", 90).taxSeqNo(1));
        list.add(new AuditorTax("781", "001", "20200910", "HK", 10).taxSeqNo(1));
        auditorTaxMapper.insertTax(list);
    }

    @Test
    public void test(){
        String sql = "insert into AUDITOR_OFFICIAL_TAX (DOCUMENT_NO, TAX_CODE)" +
                "values (?, ?)";
        jdbcTemplate.update(sql, "81","CN");
    }
}