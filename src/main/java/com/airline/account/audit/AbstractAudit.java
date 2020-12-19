package com.airline.account.audit;

import com.airline.account.ticket.ETax;
import com.airline.account.utils.TaxUtil;

import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 * 模板类
 */
public abstract class AbstractAudit {

    public void taxDiff(List<ETax> received, List<ETax> due){
        for(ETax tax : due) {
            ETax r = TaxUtil.findTax(received, tax);
            if(r == null) {
//                  insert 无实收
            } else {
//              update diff
            }
        }
        for(ETax tax : received) {
//            update 无应收
        }
    }
}
