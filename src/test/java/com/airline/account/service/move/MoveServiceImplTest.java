package com.airline.account.service.move;

import com.airline.account.mapper.acca.SalMapper;
import com.airline.account.mapper.et.MoveLogMapper;
import com.airline.account.model.acca.Sal;
import com.airline.account.model.et.MoveLog;
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

    @Autowired
    private MoveLogMapper moveLogMapper;

    @Test
    public void testMoveDIp() throws Exception {
        List<Sal> sals = salMapper.queryCnjByFile("ACCA_SAL_IP_D", "D_IP_SAL_20190412.csv");
        for (Sal sal : sals){
            try{
                moveService.moveDIp(sal);
            } catch (Exception e) {
                e.printStackTrace();
                MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                moveLogMapper.insertLog(log);
            }
        }
    }

    @Test
    public void testMoveDDp() throws Exception {
        List<Sal> sals = salMapper.queryCnjByFile("ACCA_SAL_DP_D", "D_DP_SAL_20190403.csv");
        for(Sal sal : sals){
            try{
                moveService.moveDDp(sal);
            }catch (Exception e){
                MoveLog log = new MoveLog(sal.getAirline3code(), sal.getFirstTicketNo(), e.getMessage());
                moveLogMapper.insertLog(log);
            }
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

    @Test
    public void test() throws Exception {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("2319925641");
        Sal s = salMapper.testQuery(sal, "ACCA_SAL_IP_D");
        moveService.moveDIp(s);
    }
}