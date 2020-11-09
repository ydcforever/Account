package com.airline.account.mapper.et;

import com.airline.account.model.et.Segment;
import com.airline.account.prorate.SegmentTax;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class ProrateMapperTest {

    @Autowired
    private ProrateMapper prorateMapper;

    @Test
    public void testQuerySegmentTax() throws Exception {
        List<Segment> segments = new ArrayList<>();
//        segments.add(new Segment("781", "2402092990", 1));
        segments.add(new Segment("781", "2402092990", 2));
        List<SegmentTax> taxes = prorateMapper.querySegmentTax(segments);
        System.out.println(taxes);
    }
}