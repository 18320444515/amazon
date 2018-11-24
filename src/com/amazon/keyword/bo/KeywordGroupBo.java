package com.amazon.keyword.bo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazon.common.entity.KeywordGroup;
import com.amazon.keyword.dao.IKeywordGroupDao;

@Service("keywordGroupBo")
public class KeywordGroupBo implements IKeywordGroupBo {
	
	@Autowired
	private IKeywordGroupDao keywordGroupDao;
	
	@Override
	public int deleteById(int id) {
		return keywordGroupDao.deleteByPrimaryKey(id);
	}

	@Override
	public int addOne(KeywordGroup keywordGroup) {
		return keywordGroupDao.insertSelective(keywordGroup);
	}

}
