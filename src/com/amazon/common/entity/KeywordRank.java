package com.amazon.common.entity;

import java.io.Serializable;

public class KeywordRank extends BaseEntity implements Serializable{
    private Integer id;

    private Integer keywordId;

    private Integer keywordRank;

    private Long createTime;
    
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

    public Integer getKeywordRank() {
        return keywordRank;
    }

    public void setKeywordRank(Integer keywordRank) {
        this.keywordRank = keywordRank;
    }

    public Long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Long createTime) {
        this.createTime = createTime;
    }
}