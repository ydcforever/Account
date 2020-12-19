package com.airline.account.service.acca;

import com.airline.account.model.acca.Relation;
import com.airline.account.model.acca.Sal;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * Created by ydc on 2020/12/18.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class RelationServiceImplTest {

    @Autowired
    private RelationService relationService;

    @Test
    public void updateE() {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("2319208880");
        relationService.updateE(sal);
    }

    @Test
    public void updateR() {
        List<Relation> list = relationService.queryRefund("1.txt");
        for(Relation relation : list) {
            relationService.updateR(relation);
        }
    }

    @Test
    public void queryExchange() {
        Sal sal = new Sal();
        sal.setAirline3code("781");
        sal.setTicketNo("2319208880");
        List<Relation> list = relationService.queryExchange(sal);
        System.out.println(list);
    }

    @Test
    public void queryRefund() {
        List<Relation> list = relationService.queryRefund("1.txt");
        System.out.println(list);
    }
}