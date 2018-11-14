package com.amazon.keyword.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amazon.keyword.bo.IKeywordRankBo;

@Controller
@RequestMapping("/keyword/rank")
public class KeywordRankController {
	@Resource
	private IKeywordRankBo keywordRankBo;
	
	@RequestMapping("/nlIctInsertRank")
	@ResponseBody
	public Object nlIctInsertDetail(){
		keywordRankBo.txInsertBatchRank();
		return "ok";
	}
}
