package com.amazon.common.entity;

import java.io.Serializable;

public class BaseEntity implements Serializable{
	private Integer id;
	
	private Integer disableFlag;
	
	private int[] ids;
	
	private int rows;
	
	private int page;
	
	private int pageStart; 

	public BaseEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getDisableFlag() {
		return disableFlag;
	}

	public void setDisableFlag(Integer disableFlag) {
		this.disableFlag = disableFlag;
	}

	public int[] getIds() {
		return ids;
	}

	public void setIds(int[] ids) {
		this.ids = ids;
	}

	public int getRows() {
		return rows;
	}

	public void setRows(int rows) {
		this.rows = rows;
		this.pageStart = (page - 1) * rows; 
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getPageStart() {
		return pageStart;
	}

	public void setPageStart(int pageStart) {
		this.pageStart = pageStart;
	}
	
}
