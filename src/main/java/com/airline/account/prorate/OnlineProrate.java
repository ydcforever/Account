package com.airline.account.prorate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by ydc on 2020/9/7.
 * 模板类
 */
public class OnlineProrate extends AbstractProrate implements IProrateComponent {

    @Override
    public List<SegmentTax> getSegTax() {
        return null;
    }

    @Override
    public Map<String, Map<String, SegmentTax>> handler(List<SegmentTax> list) {
        Map<String, Map<String, SegmentTax>> map = new HashMap<>(16);
        for(SegmentTax tax : list) {
            if(isComponent(tax)){
//                比例分摊示意1-3；5；
//                String[] portions = tax.getSegNo().split(";");
//                Map<String, SegTax> seg = getSegMap(map, "5");
//                seg.put(tax.key(), tax);
                doWith(map, tax);
            } else {
                Map<String, SegmentTax> seg = getSegMap(map, tax.getSegNo());
                addSegMapTax(seg, tax);
            }
        }
        return map;
    }

    @Override
    public void doWith(Map<String, Map<String, SegmentTax>> map, SegmentTax tax) {

    }
}
