package com.amazon.keyword.dao;

import com.amazon.common.entity.KeywordGroup;

public interface IKeywordGroupDao {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(KeywordGroup record);

    KeywordGroup selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(KeywordGroup record);

}