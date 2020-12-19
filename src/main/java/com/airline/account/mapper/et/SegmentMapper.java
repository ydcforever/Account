package com.airline.account.mapper.et;

import com.airline.account.model.et.Segment;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by ydc on 2020/9/17.
 */
@Repository
public interface SegmentMapper {

    void insertSegment(@Param("list") List<Segment> segment);

    List<Segment> querySegment(@Param("seg") Segment segment);
}
