package com.amazon.keyword.bo;

import com.amazon.common.entity.KeywordGroup;

public interface IKeywordGroupBo {
	
	int deleteById(int id);
	
	int addOne(KeywordGroup keywordGroup);
}
