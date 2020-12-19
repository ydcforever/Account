package com.airline.account.ticket;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by ydc on 2020/9/7.
 */
@Data
@NoArgsConstructor
public class ETax {

	private String taxCode;

	private Double amt;

	private String saleCur;

	private String taxName;

	public ETax(String taxCode, Double amt, String saleCur) {
		this.taxCode = taxCode;
		this.amt = amt;
		this.saleCur = saleCur;
	}

	public String key(){
		return taxCode;
	}
}