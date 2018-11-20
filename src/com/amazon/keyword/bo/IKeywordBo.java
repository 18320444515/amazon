package com.amazon.keyword.bo;

import com.amazon.common.entity.Keyword;

public interface IKeywordBo {
	
	public int txUpdateVolume(String rootName);
	
	public Object queryAllDataById(Keyword keyword);
	
	public Object queryKeywordList(Keyword keyword);
	
	/**
	 * 批量设置group
	 * @param groupId 分组的id
	 * @param keywordIdList keyword的id列表
	 * @return 1=成功,0=异常
	 */
	public int setGruopMutiple(Integer groupId, int[] keywordIdList);
}
