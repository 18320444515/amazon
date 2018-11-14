package com.amazon.keyword.dao;

import java.util.List;

import com.amazon.common.entity.KeywordDetail;

public interface IKeywordDetailDao {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(KeywordDetail record);

    KeywordDetail selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(KeywordDetail record);
    
    List<KeywordDetail> queryDetailList(KeywordDetail record);
    
    KeywordDetail queryLatestDetail(KeywordDetail record);

}