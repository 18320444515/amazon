package com.amazon.common.entity;

import java.io.Serializable;
import java.util.List;

public class KeywordAsin extends BaseEntity implements Serializable{
	private Integer id;

    private String name;
    
    private List<KeywordGroup> groupList;
    
    public Integer getId() {
        return id;
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

	public List<KeywordGroup> getGroupList() {
		return groupList;
	}

	public void setGroupList(List<KeywordGroup> groupList) {
		this.groupList = groupList;
	}
}
