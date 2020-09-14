package com.airline.account.prorate;

import java.util.*;

/**
 * Created by ydc on 2020/9/7.
 */
public abstract class AbstractProrate {

    public static final String COMPONENT_SPACER = ";";

    /**
     * 库里取或者在线分摊
     */
    public abstract List<SegmentTax> getSegTax();

    /**
     * 分摊方法
     * 二次分摊或者单纯格式转换
     * @param list
     * @return
     */
    public abstract Map<String, Map<String, SegmentTax>> handler(List<SegmentTax> list);

    /**
     * 指定航段的税种汇总
     * 用于原票退款
     * @param map
     * @param segNo
     * @return
     */
    public List<SegmentTax> getSegTax(Map<String, Map<String, SegmentTax>> map, String ...segNo){
        Map<String, SegmentTax> refund = new HashMap<>();
        for(String no : segNo){
            Map<String, SegmentTax> segTax = map.get(no);
            Set<Map.Entry<String, SegmentTax>> set = segTax.entrySet();
            for(Map.Entry<String, SegmentTax> item: set){
                addSegMapTax(refund, item.getValue());
            }
        }
        List<SegmentTax> list = new ArrayList<>();
        Set<Map.Entry<String, SegmentTax>> refundSet = refund.entrySet();
        for(Map.Entry<String, SegmentTax> item: refundSet){
            list.add(item.getValue());
        }
        return list;
    }

    /**
     * 结构价
     * @param tax
     * @return
     */
    public boolean isComponent(SegmentTax tax){
        return tax.getSegNo().contains(COMPONENT_SPACER);
    }

    /**
     * 获取指定航段税费列表
     * @param map
     * @param segNo
     * @return
     */
    public Map<String, SegmentTax> getSegMap(Map<String, Map<String, SegmentTax>> map, String segNo){
        Map<String, SegmentTax> seg = map.get(segNo);
        if (seg == null) {
            seg = new HashMap<>();
            map.put(segNo, seg);
        }
        return seg;
    }

    /**
     * 追加同税种金额，主要针对燃油费
     * @param map
     * @param tax
     */
    public void addSegMapTax(Map<String, SegmentTax> map, SegmentTax tax){
        String key = tax.key();
        SegmentTax segmentTax = map.get(tax.key());
        if(segmentTax == null) {
            map.put(key, tax);
        } else {
            segmentTax.addAmt(tax);
        }
    }
}
