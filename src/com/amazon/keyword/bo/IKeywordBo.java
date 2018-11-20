package com.amazon.keyword.bo;

import com.amazon.common.entity.Keyword;

public interface IKeywordBo {
	
	public int txUpdateVolume(String rootName);
	
	public Object queryAllDataById(Keyword keyword);
	
	public Object queryKeywordList(Keyword keyword);
	
	/**
	 * ��������group
	 * @param groupId �����id
	 * @param keywordIdList keyword��id�б�
	 * @return 1=�ɹ�,0=�쳣
	 */
	public int setGruopMutiple(Integer groupId, int[] keywordIdList);
}
