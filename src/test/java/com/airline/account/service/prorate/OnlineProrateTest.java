package com.airline.account.service.prorate;

import com.airline.account.mapper.et.AuditorSegmentMapper;
import com.airline.account.mapper.et.AuditorTicketMapper;
import com.airline.account.mapper.procedure.QuerySegmentTaxMapper;
import com.airline.account.model.et.Segment;
import com.airline.account.model.et.Ticket;
import com.airline.account.prorate.OnlineProrate;
import com.airline.account.prorate.SegmentTax;
import com.airline.account.utils.TaxUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class OnlineProrateTest {

    @Autowired
    private QuerySegmentTaxMapper querySegmentTaxMapper;

    @Autowired
    private AuditorTicketMapper auditorTicketMapper;

    @Autowired
    private AuditorSegmentMapper auditorSegmentMapper;

    @Test
    public void testHandler() throws Exception {
        Ticket ticket = new Ticket("781","3633959119", "N", "2019-03-29");
        Ticket route = auditorTicketMapper.queryTicket(ticket);

        Segment segment = new Segment("781", "3633959119", 1);
        List<Segment> segments = auditorSegmentMapper.querySegment(segment);
        HashMap taxMap = TaxUtil.procedure(route, segments);
        querySegmentTaxMapper.querySegmentTax(taxMap);
        List<SegmentTax> list = (List<SegmentTax>)taxMap.get("result_set");

        Map<String, Map<String, SegmentTax>>  map = OnlineProrate.getInstance().handler(list);
        Set<Map.Entry<String, Map<String, SegmentTax>>> set = map.entrySet();
        for (Map.Entry<String, Map<String, SegmentTax>> seg : set) {
            String no = seg.getKey();
            Map<String, SegmentTax> tax = seg.getValue();
            for (SegmentTax segTax : tax.values()) {
                System.out.println(no + ":" + segTax.toString());
            }
        }
    }
}