package com.amazon.keyword.controller;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amazon.common.entity.KeywordGroup;
import com.amazon.keyword.bo.IKeywordGroupBo;

@RestController
@RequestMapping("/keyword/group")
public class KeywordGroupController {

	@Resource
	private IKeywordGroupBo keywordGroupBo;
	
	@RequestMapping("/nlIctAddGroup")
	public Object add(KeywordGroup keywordGroup) {
		try {
			
			return keywordGroupBo.addOne(keywordGroup);
		}catch(Exception e) {
			e.printStackTrace();
			return e.getMessage();
		}
	}
	
	@RequestMapping("/nlIctDeleteGroup")
	public Object delete(KeywordGroup keywordGroup) {
		try {
			keywordGroupBo.deleteById(keywordGroup.getId());
			return "ok";
		}catch(Exception e) {
			e.printStackTrace();
			return e.getMessage();
		}
	}
	
}
