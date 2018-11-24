package com.amazon.keyword.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amazon.common.entity.KeywordDetail;
import com.amazon.keyword.bo.IKeywordDetailBo;

@Controller
@RequestMapping("/keyword/detail")
public class KeywordDetailController {
	@Resource
	private IKeywordDetailBo keywordDetailBo;
	
	@RequestMapping("/nlIctInsertDetail")
	@ResponseBody
	public Object nlIctInsertDetail(HttpSession session){
		String rootName = session.getServletContext().getRealPath("");
		keywordDetailBo.txInserBatchDetailCSV(rootName);
		return "ok";
	}
	
	@RequestMapping("/nlIctQueryDetail")
	@ResponseBody
	public Object nlIctQueryDetail(KeywordDetail keywordDetail){
		return keywordDetailBo.queryDetailList(keywordDetail);
	}
}
