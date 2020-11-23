package com.airline.account.mapper.et;

import com.airline.account.model.et.Segment;
import com.airline.account.model.et.SegmentTax;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/11/2.
 */
@Repository
public interface AuditorSegmentTaxMapper {

    List<SegmentTax> querySegmentTax(List<Segment> list);

}
