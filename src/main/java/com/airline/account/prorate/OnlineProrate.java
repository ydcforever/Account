package com.airline.account.prorate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by ydc on 2020/9/7.
 * 模板类
 */
public class OnlineProrate extends AbstractProrate implements IProrateComponent{

    private static class Builder{
        private static final OnlineProrate INSTANCE = new OnlineProrate();
    }

    public static OnlineProrate getInstance(){
        return Builder.INSTANCE;
    }
    
    @Override
    public Map<String, Map<String, SegmentTax>> handler(List<SegmentTax> taxes) {
        Map<String, Map<String, SegmentTax>> map = new HashMap<>(16);
        for(SegmentTax tax : taxes) {
            if(isComponent(tax)){
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
        //                比例分摊示意1-3；5；
//        String[] portion = tax.getSegNo().split(";");
//        String[] seg;
//        for(String c : portion) {
//            if(c.contains("-")) {
//
//            }
//        }
//                Map<String, SegmentTax> seg = getSegMap(map, "5");
//                seg.put(tax.key(), tax);
        //暂时不处理
        Map<String, SegmentTax> seg = getSegMap(map, tax.getSegNo());
        addSegMapTax(seg, tax);
    }
}
