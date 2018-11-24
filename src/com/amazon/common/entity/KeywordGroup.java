package com.amazon.common.entity;

import java.io.Serializable;

public class KeywordGroup extends BaseEntity implements Serializable{
    private Integer id;
    
    private Integer asinId;

    private String name;
    
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

	public Integer getAsinId() {
		return asinId;
	}

	public void setAsinId(Integer asinId) {
		this.asinId = asinId;
	}
}