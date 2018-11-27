package com.amazon.keyword.dao;

import java.util.List;

import com.amazon.common.entity.KeywordRank;

public interface IKeywordRankDao {
    int deleteByPrimaryKey(Integer id);

    int insertSelective(KeywordRank record);

    KeywordRank selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(KeywordRank record);
    
    List<KeywordRank> queryRankList(KeywordRank record);
    
    KeywordRank queryLatestRank(KeywordRank record);

}