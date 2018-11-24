package com.amazon.keyword.dao;

import java.util.List;

import com.amazon.common.entity.KeywordAsin;

public interface IKeywordAsinDao {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(KeywordAsin record);

    KeywordAsin selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(KeywordAsin record);
    
    KeywordAsin selectKeywordAsin(KeywordAsin record);
    
    List<KeywordAsin> queryAsinList();

}