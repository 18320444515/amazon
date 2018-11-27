package com.amazon.keyword.bo;

import com.amazon.common.entity.Keyword;
import com.amazon.common.entity.KeywordFilter;

public interface IKeywordBo {
	
	public int txUpdateVolume(String rootName);
	
	public Object queryAllDataById(Keyword keyword);
	
	public Object queryKeywordList(Keyword keyword);
	
	public Object txDeleteAllData();
	
	public int setGroup(Keyword keyword);
	
	public Object queryKeywordFilterList(KeywordFilter keywordFilter);
}
