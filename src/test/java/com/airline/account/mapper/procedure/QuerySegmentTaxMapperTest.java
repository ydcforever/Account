package com.airline.account.mapper.procedure;

import com.airline.account.mapper.et.AuditorSegmentMapper;
import com.airline.account.mapper.et.AuditorTicketMapper;
import com.airline.account.model.et.Segment;
import com.airline.account.model.et.Ticket;
import com.airline.account.prorate.SegmentTax;
import com.airline.account.utils.TaxUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.HashMap;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class QuerySegmentTaxMapperTest {
    @Autowired
    private QuerySegmentTaxMapper querySegmentTaxMapper;

    @Autowired
    private AuditorTicketMapper auditorTicketMapper;

    @Autowired
    private AuditorSegmentMapper auditorSegmentMapper;

    @Test
    public void testQuerySegmentTax() throws Exception {
        Ticket ticket = new Ticket("781","3633959119", "N", "2019-03-29");
        Ticket route = auditorTicketMapper.queryTicket(ticket);

        Segment segment = new Segment("781", "3633959119", 1);
        List<Segment> segments = auditorSegmentMapper.querySegment(segment);
        HashMap map = TaxUtil.procedure(route, segments);
        querySegmentTaxMapper.querySegmentTax(map);
        List<SegmentTax> list = (List<SegmentTax>)map.get("result_set");
        for(SegmentTax tax : list) {
            System.out.println(tax);
        }
    }
}