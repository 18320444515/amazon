package com.amazon.keyword.dao;

import java.util.List;

import com.amazon.common.entity.Keyword;

public interface IKeywordDao {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(Keyword record);

    Keyword selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Keyword record);
    
    Keyword selectKeyword(Keyword record);
    
    List<Integer> queryKeywordId(Keyword record);

    int setGroupById(Integer groupId, Integer id);
}