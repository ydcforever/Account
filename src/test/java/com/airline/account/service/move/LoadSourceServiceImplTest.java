package com.airline.account.service.move;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * Created by ydc on 2020/12/19.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class LoadSourceServiceImplTest {

    @Autowired
    private LoadSourceService loadSourceService;

    @Test
    public void getSource() {
        List<String> list = loadSourceService.getSource("ACCA_IP_D");
        System.out.println(list);
    }

    @Test
    public void updateStatus() {
        loadSourceService.updateStatus("ACCA_IP_D", "D_IP_SAL_20190401.csv", "Y");
    }
}