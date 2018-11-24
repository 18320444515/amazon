package com.amazon.keyword.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amazon.common.entity.Keyword;
import com.amazon.keyword.bo.IKeywordBo;
import com.amazon.keyword.bo.IKeywordDetailBo;
import com.amazon.keyword.bo.IKeywordRankBo;

@Controller
@RequestMapping("/keyword/main")
public class KeywordController {
	@Resource
	private IKeywordBo keywordBo;
	@Resource
	private IKeywordDetailBo keywordDetailBo;
	@Resource
	private IKeywordRankBo keywordRankBo;
	
	@RequestMapping("/nlIctUpdateExcel")
	@ResponseBody
	public Object nlIctUpdateExcel(HttpSession session){
		String rootName = session.getServletContext().getRealPath("");
//		System.out.println(rootName);
		
		keywordDetailBo.txInserBatchDetailCSV(rootName);
		keywordRankBo.txInsertBatchRank(rootName);
		keywordBo.txUpdateVolume(rootName);
		return "ok";
	}
	
	@RequestMapping("/nlIctUpdateVolume")
	@ResponseBody
	public Object nlIctUpdateVolume(HttpSession session){
		String rootName = session.getServletContext().getRealPath("");
		keywordBo.txUpdateVolume(rootName);
		return "ok";
	}
	
	@RequestMapping("/nlIctQueryAllDataById")
	@ResponseBody
	public Object nlIctQueryAllDataById(Keyword keyword){
		return keywordBo.queryAllDataById(keyword);
	}
	
	@RequestMapping("/nlIctQueryAllDataList")
	@ResponseBody
	public Object nlIctQueryAllDataList(Keyword keyword){
		return keywordBo.queryKeywordList(keyword);
	}
	
	@RequestMapping("/nlIctDeleteAllData")
	@ResponseBody
	public Object nlIctDeleteAllData(){
		return keywordBo.txDeleteAllData();
	}
	
	/**
	 * 需传参数
	 * 1. id = keyword的id
	 * 2. groupId = 分组的id
	 */
	@RequestMapping("/nlIctSetGroup")
	@ResponseBody
	public Object setGroup(Keyword keyword){
		return keywordBo.setGroup(keyword);
	}
}
