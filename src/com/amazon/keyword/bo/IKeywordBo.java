package com.amazon.keyword.bo;

import com.amazon.common.entity.Keyword;

public interface IKeywordBo {
	
	public int txUpdateVolume();
	
	public Object queryAllDataById(Keyword keyword);
	
	public Object queryKeywordList(Keyword keyword);
}
