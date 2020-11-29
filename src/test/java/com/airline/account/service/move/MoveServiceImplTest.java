package com.airline.account.service.move;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.model.acca.Sal;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class MoveServiceImplTest {

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
        List<Sal> sals = salMapper.queryCnj("ACCA_SAL_DP_D", "20190390", "20190330");
        for(Sal sal : sals){
            moveService.moveDDp(sal);
        }
    }

    @Test
    public void testMoveMIp() throws Exception {
        List<Sal> sals = salMapper.queryCnj("ACCA_SAL_IP_M", "20190390", "20190330");
        for(Sal sal : sals){
            moveService.moveMIp(sal);
        }
    }

    @Test
    public void testMoveMDp() throws Exception {
        List<Sal> sals = salMapper.queryCnj("ACCA_SAL_DP_M", "20190390", "20190330");
        for(Sal sal : sals){
            moveService.moveMDp(sal);
        }
    }
}