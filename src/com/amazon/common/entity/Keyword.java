package com.amazon.common.entity;

import java.io.Serializable;
import java.util.List;

public class Keyword extends BaseEntity implements Serializable{
    private Integer id;

    private String name;

    private Integer volume;

    private Integer groupId;
    
	private Integer asinId;
    
    private String matchType;
    
    private KeywordDetail latestDetail;
    
    private List<KeywordDetail> detailList;
    
    private List<KeywordRank> rankList;
    
    private Long startTime;
    
    private Long endTime;
    
    private Integer dayFlag;
    
    private String groupName;

    public Integer getId() {
        return id;
    }

    public List<KeywordDetail> getDetailList() {
		return detailList;
	}

	public void setDetailList(List<KeywordDetail> detailList) {
		this.detailList = detailList;
	}

	public List<KeywordRank> getRankList() {
		return rankList;
	}

	public void setRankList(List<KeywordRank> rankList) {
		this.rankList = rankList;
	}

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

	public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public Integer getGroupId() {
        return groupId;
    }

    public void setGroupId(Integer groupId) {
        this.groupId = groupId;
    }

	public String getMatchType() {
		return matchType;
	}

	public void setMatchType(String matchType) {
		this.matchType = matchType;
	}

	public KeywordDetail getLatestDetail() {
		return latestDetail;
	}

	public void setLatestDetail(KeywordDetail latestDetail) {
		this.latestDetail = latestDetail;
	}

	public Integer getDayFlag() {
		return dayFlag;
	}

	public void setDayFlag(Integer dayFlag) {
		this.dayFlag = dayFlag;
	}
	
	public Integer getAsinId() {
		return asinId;
	}

	public void setAsinId(Integer asinId) {
		this.asinId = asinId;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
}