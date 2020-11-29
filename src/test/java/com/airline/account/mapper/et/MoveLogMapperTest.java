package com.airline.account.mapper.et;

import com.airline.account.model.et.MoveLog;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class MoveLogMapperTest {

    @Autowired
    private MoveLogMapper moveLogMapper;

    @Test
    public void testInsertLog() throws Exception {
        MoveLog log = new MoveLog("781", "00001", "error");
        moveLogMapper.insertLog(log);
    }
}