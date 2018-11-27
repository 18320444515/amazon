package com.amazon.common.entity;

import java.io.Serializable;

public class KeywordFilter extends BaseEntity implements Serializable{
	private Integer asinId;
	
	private Integer groupId;
	
	private String fkeyword;
	
	private Integer ftypeFlag;
	
	private String fmatchType;
	
	private Integer fdayFlag;
	
	private Integer fdays;
	
	private Long fstartTime;
	
	private Long fendTime;
	
	private Integer fimpressionMin;
	
	private Integer fimpressionMax;
	
	private Float facosMin;
	
	private Float facosMax;
	

	public String getFkeyword() {
		return fkeyword;
	}

	public void setFkeyword(String fkeyword) {
		this.fkeyword = fkeyword;
	}

	public Integer getFtypeFlag() {
		return ftypeFlag;
	}

	public void setFtypeFlag(Integer ftypeFlag) {
		this.ftypeFlag = ftypeFlag;
	}

	public String getFmatchType() {
		return fmatchType;
	}

	public void setFmatchType(String fmatchType) {
		this.fmatchType = fmatchType;
	}

	public Integer getFdayFlag() {
		return fdayFlag;
	}

	public void setFdayFlag(Integer fdayFlag) {
		this.fdayFlag = fdayFlag;
	}

	public Long getFstartTime() {
		return fstartTime;
	}

	public void setFstartTime(Long fstartTime) {
		this.fstartTime = fstartTime;
	}

	public Long getFendTime() {
		return fendTime;
	}

	public void setFendTime(Long fendTime) {
		this.fendTime = fendTime;
	}

	public Integer getFimpressionMin() {
		return fimpressionMin;
	}

	public void setFimpressionMin(Integer fimpressionMin) {
		this.fimpressionMin = fimpressionMin;
	}

	public Integer getFimpressionMax() {
		return fimpressionMax;
	}

	public void setFimpressionMax(Integer fimpressionMax) {
		this.fimpressionMax = fimpressionMax;
	}

	public Float getFacosMin() {
		return facosMin;
	}

	public void setFacosMin(Float facosMin) {
		this.facosMin = facosMin;
	}

	public Float getFacosMax() {
		return facosMax;
	}

	public void setFacosMax(Float facosMax) {
		this.facosMax = facosMax;
	}

	public Integer getAsinId() {
		return asinId;
	}

	public void setAsinId(Integer asinId) {
		this.asinId = asinId;
	}

	public Integer getGroupId() {
		return groupId;
	}

	public void setGroupId(Integer groupId) {
		this.groupId = groupId;
	}

	public Integer getFdays() {
		return fdays;
	}

	public void setFdays(Integer fdays) {
		this.fdays = fdays;
	}
}
