package com.amazon.keyword.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amazon.common.entity.Keyword;
import com.amazon.keyword.bo.IKeywordBo;

@Controller
@RequestMapping("/keyword/main")
public class KeywordController {
	@Resource
	private IKeywordBo keywordBo;
	
	@RequestMapping("/nlIctUpdateVolume")
	@ResponseBody
	public Object nlIctUpdateVolume(){
		keywordBo.txUpdateVolume();
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
}
