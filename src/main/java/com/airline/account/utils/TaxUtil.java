package com.airline.account.utils;

import com.airline.account.ticket.Tax;

import java.util.Iterator;
import java.util.List;

/**
 * Created by ydc on 2020/9/7.
 */
public class TaxUtil {

    /**
     * 税费比对，主要是改签
     *
     * @param taxes           新票税费
     * @param orgSegTaxes 原票分摊税费 要求金额负数
     * @return
     */
    public static List<Tax> taxCollate(List<Tax> taxes, List<Tax> orgSegTaxes) {
        for (Tax tax : taxes) {
            Tax f = findTax(orgSegTaxes, tax);
            if (f != null) {
                tax.setAmt(tax.getAmt() + f.getAmt());
            }
        }
        taxes.addAll(orgSegTaxes);
        return taxes;
    }

    public static Tax findTax(List<Tax> taxes, Tax tax) {
        Iterator<Tax> iterator = taxes.iterator();
        while (iterator.hasNext()) {
            Tax queryTax = iterator.next();
            if (tax.key().equals(queryTax.key())) {
                iterator.remove();
                return queryTax;
            }
        }
        return null;
    }

}
