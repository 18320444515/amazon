package com.amazon.common.entity;

import java.io.Serializable;

public class KeywordDetail extends BaseEntity implements Serializable{
    private Integer id;

    private Integer keywordId;

    private Float sbidLow;

    private Float sbidMedian;

    private Float sbidHigh;

    private Float keywordBid;

    private Integer impression;

    private Float spend;

    private Float cpc;

    private Integer orders;

    private Float sales;

    private Long createTime;
    
    private Float acos;
    
    private Long startTime;
    
    private Long endTime;

    public Long getStartTime() {
		return startTime;
	}

	public void setStartTime(Long startTime) {
		this.startTime = startTime;
	}

	public Long getEndTime() {
		return endTime;
	}

	public void setEndTime(Long endTime) {
		this.endTime = endTime;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getKeywordId() {
        return keywordId;
    }

    public void setKeywordId(Integer keywordId) {
        this.keywordId = keywordId;
    }

    public Float getSbidLow() {
        return sbidLow;
    }

    public void setSbidLow(Float sbidLow) {
        this.sbidLow = sbidLow;
    }

    public Float getSbidMedian() {
        return sbidMedian;
    }

    public void setSbidMedian(Float sbidMedian) {
        this.sbidMedian = sbidMedian;
    }

    public Float getSbidHigh() {
        return sbidHigh;
    }

    public void setSbidHigh(Float sbidHigh) {
        this.sbidHigh = sbidHigh;
    }

    public Float getKeywordBid() {
        return keywordBid;
    }

    public void setKeywordBid(Float keywordBid) {
        this.keywordBid = keywordBid;
    }

    public Integer getImpression() {
        return impression;
    }

    public void setImpression(Integer impression) {
        this.impression = impression;
    }

    public Float getSpend() {
        return spend;
    }

    public void setSpend(Float spend) {
        this.spend = spend;
    }

    public Float getCpc() {
        return cpc;
    }

    public void setCpc(Float cpc) {
        this.cpc = cpc;
    }

    public Integer getOrders() {
        return orders;
    }

    public void setOrders(Integer orders) {
        this.orders = orders;
    }

    public Float getSales() {
        return sales;
    }

    public void setSales(Float sales) {
        this.sales = sales;
    }

    public Long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Long createTime) {
        this.createTime = createTime;
    }

	public Float getAcos() {
		return acos;
	}

	public void setAcos(Float acos) {
		this.acos = acos;
	}
}