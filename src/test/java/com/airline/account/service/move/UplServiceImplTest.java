package com.airline.account.service.move;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class UplServiceImplTest {

    @Autowired
    private UplService uplService;

    @Test
    public void testMoveDDpUpl() throws Exception {
        uplService.moveDDpUpl("781", "8286355468", "");
    }

    @Test
    public void testMoveDIpUpl() throws Exception {
        uplService.moveDIpUpl("781", "2318933817", "");
    }
}