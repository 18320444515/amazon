package com.amazon.keyword.bo;

import com.amazon.common.entity.KeywordDetail;


public interface IKeywordDetailBo {
	
	public int txInsertBatchDetail();
	
	public int txInserBatchDetailCSV();
	
	public Object queryDetailList(KeywordDetail keywordDetail);
	
}
