package com.airline.account.mapper.et;

import com.airline.account.model.et.Segment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class AuditorSegmentMapperTest {

    @Autowired
    private AuditorSegmentMapper auditorSegmentMapper;

    @Test
    public void testInsertSegment() throws Exception {
        List<Segment> list = new ArrayList<>();
        Segment seg1 = new Segment("781", "001", 1);
        list.add(seg1);

        Segment seg2 = new Segment("781","002", 1);
        list.add(seg2);
        auditorSegmentMapper.insertSegment(list);
    }
}