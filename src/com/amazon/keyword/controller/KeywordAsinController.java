package com.amazon.keyword.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amazon.keyword.bo.IKeywordAsinBo;

@Controller
@RequestMapping("/keyword/asin")
public class KeywordAsinController {
	@Resource
	private IKeywordAsinBo keywordAsinBo;
	
	@RequestMapping("/nlIctQueryAsinList")
	@ResponseBody
	public Object nlIctQueryAsinList(){
		return keywordAsinBo.queryAsinList();
	}
}
