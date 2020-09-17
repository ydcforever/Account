package com.airline.account.ticket;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by ydc on 2020/9/7.
 */
@Data
@NoArgsConstructor
public class Tax {

	private String taxCode;

	private Double amt;

	private String saleCur;

	public Tax(String taxCode, Double amt, String saleCur) {
		this.taxCode = taxCode;
		this.amt = amt;
		this.saleCur = saleCur;
	}

	public String key(){
		return taxCode;
	}
}