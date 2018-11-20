package com.amazon.keyword.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	/**
	 * 批量设置group
	 * @param groupId 分组id
	 * @param keyword keyword的id数组
	 * @return
	 */
	@RequestMapping("/nlIctSetGroupMutiple")
	@ResponseBody
	public String nlIctSetGroupMutiple(@RequestParam("groupId")Integer groupId, @RequestParam("keywordArr") int[] keywordArr){
		System.out.println(keywordArr[1]);
		keywordBo.setGruopMutiple(groupId, keywordArr);
		return "ok";
	}
}
