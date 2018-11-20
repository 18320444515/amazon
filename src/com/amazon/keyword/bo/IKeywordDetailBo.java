package com.amazon.keyword.bo;

import com.amazon.common.entity.KeywordDetail;


public interface IKeywordDetailBo {
	
	public int txInsertBatchDetail(String rootName);
	
	public int txInserBatchDetailCSV(String rootName);
	
	public Object queryDetailList(KeywordDetail keywordDetail);
	
}
