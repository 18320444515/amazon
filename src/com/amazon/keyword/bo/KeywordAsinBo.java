package com.amazon.keyword.bo;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.amazon.keyword.dao.IKeywordAsinDao;

@Service("keywordAsinBo")
public class KeywordAsinBo implements IKeywordAsinBo{
	@Resource
	private IKeywordAsinDao keywordAsinDao;
	
	@Override
	public Object queryAsinList() {
		return keywordAsinDao.queryAsinList();
	}

}
