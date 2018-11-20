package com.amazon.keyword.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	/**
     * @apiDefine Keyword Keyword
     */
	
	@RequestMapping("/nlIctUpdateExcel")
	@ResponseBody
	public Object nlIctUpdateExcel(HttpSession session){
		String rootName = session.getServletContext().getRealPath("");
		System.out.println(rootName);
		
		keywordDetailBo.txInserBatchDetailCSV(rootName);
		keywordRankBo.txInsertBatchRank(rootName);
		keywordBo.txUpdateVolume(rootName);
		return "ok";
	}
	
	
	
	/**
     * @api {get} /keyword/main/nlIctUpdateVolume.do 更新数据源
     * @apiGroup Keyword
     * @apiSuccessExample Success-Response:
     * {
     * 	"ok"
     * }
     */
	@RequestMapping("/nlIctUpdateVolume")
	@ResponseBody
	public Object nlIctUpdateVolume(HttpSession session){
		String rootName = session.getServletContext().getRealPath("");
		keywordBo.txUpdateVolume(rootName);
		return "ok";
	}
	
	/**
     * @api {get} /keyword/main/nlIctQueryAllDataById.do 通过id查询
     * @apiGroup Keyword
     * @apiParam {String} name 关键词名称
     * @apiParam {String} matchType 匹配规则
     * @apiParam {long} startTime 开始范围
     * @apiParam {long} endTime 结束范围
     * @apiParam {int} groupId 分组id
     * @apiParam {int} volume 数量?
     * @apiParam {int} page 页数
     * @apiParam {int} rows 每页的数量
     * @apiParam {int} id 主键id
     * @apiParam {int} disableFlag
     * @apiParam {int[]} ids id的数组
     * @apiParam {int} pageStart 开始页码?
     * @apiSuccessExample Success-Request:
     * {
     * 	id:1
     * }
     * @apiSuccessExample Success-Response:
     * {
    "id": 1,
    "disableFlag": null,
    "ids": null,
    "rows": 0,
    "page": 0,
    "pageStart": 0,
    "name": "lunch bags men",
    "volume": 0,
    "groupId": 1,
    "matchType": "EXACT",
    "latestDetail": {
        "id": 1,
        "disableFlag": null,
        "ids": null,
        "rows": 0,
        "page": 0,
        "pageStart": 0,
        "keywordId": 1,
        "sbidLow": 0.75,
        "sbidMedian": 0.75,
        "sbidHigh": 0.75,
        "keywordBid": 0.75,
        "impression": 2695,
        "spend": 17.28,
        "cpc": 0.6,
        "orders": 1,
        "sales": 34.98,
        "createTime": 1541865600000,
        "acos": 49.3997,
        "startTime": null,
        "endTime": null
    },
    "detailList": [
        {
            "id": 2002,
            "disableFlag": null,
            "ids": null,
            "rows": 0,
            "page": 0,
            "pageStart": 0,
            "keywordId": 1,
            "sbidLow": 0.75,
            "sbidMedian": 0.75,
            "sbidHigh": 0.75,
            "keywordBid": 0.75,
            "impression": 2426,
            "spend": 13.62,
            "cpc": 0.62,
            "orders": 2,
            "sales": 69.96,
            "createTime": 1541692800000,
            "acos": 19.4683,
            "startTime": null,
            "endTime": null
        },
        {
            "id": 1001,
            "disableFlag": null,
            "ids": null,
            "rows": 0,
            "page": 0,
            "pageStart": 0,
            "keywordId": 1,
            "sbidLow": 0.75,
            "sbidMedian": 0.75,
            "sbidHigh": 0.75,
            "keywordBid": 0.75,
            "impression": 2695,
            "spend": 17.28,
            "cpc": 0.6,
            "orders": 1,
            "sales": 34.98,
            "createTime": 1541779200000,
            "acos": 49.3997,
            "startTime": null,
            "endTime": null
        },
        {
            "id": 1,
            "disableFlag": null,
            "ids": null,
            "rows": 0,
            "page": 0,
            "pageStart": 0,
            "keywordId": 1,
            "sbidLow": 0.75,
            "sbidMedian": 0.75,
            "sbidHigh": 0.75,
            "keywordBid": 0.75,
            "impression": 2695,
            "spend": 17.28,
            "cpc": 0.6,
            "orders": 1,
            "sales": 34.98,
            "createTime": 1541865600000,
            "acos": 49.3997,
            "startTime": null,
            "endTime": null
        }
    ],
    "rankList": [],
    "startTime": null,
    "endTime": null
}
     */
	@RequestMapping("/nlIctQueryAllDataById")
	@ResponseBody
	public Object nlIctQueryAllDataById(Keyword keyword){
		return keywordBo.queryAllDataById(keyword);
	}
	
	/**
     * @api {get} /keyword/main/nlIctQueryAllDataList.do 获取关键词列表
     * @apiGroup Keyword
     * @apiParam {String} name 关键词名称
     * @apiParam {String} matchType 匹配规则
     * @apiParam {long} startTime 开始范围
     * @apiParam {long} endTime 结束范围
     * @apiParam {int} groupId 分组id
     * @apiParam {int} volume 数量?
     * @apiParam {int} page 页数
     * @apiParam {int} rows 每页的数量
     * @apiParam {int} id 主键id
     * @apiParam {int} disableFlag
     * @apiParam {int[]} ids id的数组
     * @apiParam {int} pageStart 开始页码?
     * @apiSuccessExample Success-Request:
     * {
     * 	startTime:1541692800000
endTime:1541865600000
page:1
rows:4
     * }
     * @apiSuccessExample Success-Response:
     * {
     * [
    {
        "id": 1,
        "disableFlag": null,
        "ids": null,
        "rows": 0,
        "page": 0,
        "pageStart": 0,
        "name": "lunch bags men",
        "volume": 0,
        "groupId": 1,
        "matchType": "EXACT",
        "latestDetail": {
            "id": 1,
            "disableFlag": null,
            "ids": null,
            "rows": 0,
            "page": 0,
            "pageStart": 0,
            "keywordId": 1,
            "sbidLow": 0.75,
            "sbidMedian": 0.75,
            "sbidHigh": 0.75,
            "keywordBid": 0.75,
            "impression": 2695,
            "spend": 17.28,
            "cpc": 0.6,
            "orders": 1,
            "sales": 34.98,
            "createTime": 1541865600000,
            "acos": 49.3997,
            "startTime": null,
            "endTime": null
        },
        "detailList": [
            {
                "id": 2002,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 1,
                "sbidLow": 0.75,
                "sbidMedian": 0.75,
                "sbidHigh": 0.75,
                "keywordBid": 0.75,
                "impression": 2426,
                "spend": 13.62,
                "cpc": 0.62,
                "orders": 2,
                "sales": 69.96,
                "createTime": 1541692800000,
                "acos": 19.4683,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 1001,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 1,
                "sbidLow": 0.75,
                "sbidMedian": 0.75,
                "sbidHigh": 0.75,
                "keywordBid": 0.75,
                "impression": 2695,
                "spend": 17.28,
                "cpc": 0.6,
                "orders": 1,
                "sales": 34.98,
                "createTime": 1541779200000,
                "acos": 49.3997,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 1,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 1,
                "sbidLow": 0.75,
                "sbidMedian": 0.75,
                "sbidHigh": 0.75,
                "keywordBid": 0.75,
                "impression": 2695,
                "spend": 17.28,
                "cpc": 0.6,
                "orders": 1,
                "sales": 34.98,
                "createTime": 1541865600000,
                "acos": 49.3997,
                "startTime": null,
                "endTime": null
            }
        ],
        "rankList": [],
        "startTime": null,
        "endTime": null
    },
    {
        "id": 2,
        "disableFlag": null,
        "ids": null,
        "rows": 0,
        "page": 0,
        "pageStart": 0,
        "name": "lunch box",
        "volume": 0,
        "groupId": 1,
        "matchType": "BROAD",
        "latestDetail": {
            "id": 2,
            "disableFlag": null,
            "ids": null,
            "rows": 0,
            "page": 0,
            "pageStart": 0,
            "keywordId": 2,
            "sbidLow": 0.34,
            "sbidMedian": 0.46,
            "sbidHigh": 0.63,
            "keywordBid": 0.55,
            "impression": 2538,
            "spend": 4.61,
            "cpc": 0.42,
            "orders": 0,
            "sales": 0,
            "createTime": 1541865600000,
            "acos": 0,
            "startTime": null,
            "endTime": null
        },
        "detailList": [
            {
                "id": 2001,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 2,
                "sbidLow": 0.34,
                "sbidMedian": 0.46,
                "sbidHigh": 0.63,
                "keywordBid": 0.55,
                "impression": 5959,
                "spend": 3.11,
                "cpc": 0.28,
                "orders": 0,
                "sales": 0,
                "createTime": 1541692800000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 1002,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 2,
                "sbidLow": 0.34,
                "sbidMedian": 0.46,
                "sbidHigh": 0.63,
                "keywordBid": 0.55,
                "impression": 2538,
                "spend": 4.61,
                "cpc": 0.42,
                "orders": 0,
                "sales": 0,
                "createTime": 1541779200000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 2,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 2,
                "sbidLow": 0.34,
                "sbidMedian": 0.46,
                "sbidHigh": 0.63,
                "keywordBid": 0.55,
                "impression": 2538,
                "spend": 4.61,
                "cpc": 0.42,
                "orders": 0,
                "sales": 0,
                "createTime": 1541865600000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            }
        ],
        "rankList": [
            {
                "id": 110,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 2,
                "keywordRank": 101,
                "createTime": 1541719080000,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 111,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 2,
                "keywordRank": 104,
                "createTime": 1541802060000,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 112,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 2,
                "keywordRank": 102,
                "createTime": 1541844060000,
                "startTime": null,
                "endTime": null
            }
        ],
        "startTime": null,
        "endTime": null
    },
    {
        "id": 3,
        "disableFlag": null,
        "ids": null,
        "rows": 0,
        "page": 0,
        "pageStart": 0,
        "name": "meal prep bag",
        "volume": 0,
        "groupId": null,
        "matchType": "EXACT",
        "latestDetail": {
            "id": 3,
            "disableFlag": null,
            "ids": null,
            "rows": 0,
            "page": 0,
            "pageStart": 0,
            "keywordId": 3,
            "sbidLow": 0.66,
            "sbidMedian": 0.8,
            "sbidHigh": 1,
            "keywordBid": 0.8,
            "impression": 1896,
            "spend": 4.28,
            "cpc": 0.48,
            "orders": 0,
            "sales": 0,
            "createTime": 1541865600000,
            "acos": 0,
            "startTime": null,
            "endTime": null
        },
        "detailList": [
            {
                "id": 2004,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 3,
                "sbidLow": 0.66,
                "sbidMedian": 0.8,
                "sbidHigh": 1,
                "keywordBid": 0.8,
                "impression": 1386,
                "spend": 3.28,
                "cpc": 0.66,
                "orders": 0,
                "sales": 0,
                "createTime": 1541692800000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 1003,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 3,
                "sbidLow": 0.66,
                "sbidMedian": 0.8,
                "sbidHigh": 1,
                "keywordBid": 0.8,
                "impression": 1896,
                "spend": 4.28,
                "cpc": 0.48,
                "orders": 0,
                "sales": 0,
                "createTime": 1541779200000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 3,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 3,
                "sbidLow": 0.66,
                "sbidMedian": 0.8,
                "sbidHigh": 1,
                "keywordBid": 0.8,
                "impression": 1896,
                "spend": 4.28,
                "cpc": 0.48,
                "orders": 0,
                "sales": 0,
                "createTime": 1541865600000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            }
        ],
        "rankList": [],
        "startTime": null,
        "endTime": null
    },
    {
        "id": 4,
        "disableFlag": null,
        "ids": null,
        "rows": 0,
        "page": 0,
        "pageStart": 0,
        "name": "lunch totes",
        "volume": 0,
        "groupId": null,
        "matchType": "BROAD",
        "latestDetail": {
            "id": 4,
            "disableFlag": null,
            "ids": null,
            "rows": 0,
            "page": 0,
            "pageStart": 0,
            "keywordId": 4,
            "sbidLow": 0.38,
            "sbidMedian": 0.46,
            "sbidHigh": 0.68,
            "keywordBid": 0.75,
            "impression": 1077,
            "spend": 2.48,
            "cpc": 0.62,
            "orders": 0,
            "sales": 0,
            "createTime": 1541865600000,
            "acos": 0,
            "startTime": null,
            "endTime": null
        },
        "detailList": [
            {
                "id": 2005,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 4,
                "sbidLow": 0.38,
                "sbidMedian": 0.46,
                "sbidHigh": 0.68,
                "keywordBid": 0.75,
                "impression": 1298,
                "spend": 1.42,
                "cpc": 0.47,
                "orders": 0,
                "sales": 0,
                "createTime": 1541692800000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 1004,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 4,
                "sbidLow": 0.38,
                "sbidMedian": 0.46,
                "sbidHigh": 0.68,
                "keywordBid": 0.75,
                "impression": 1077,
                "spend": 2.48,
                "cpc": 0.62,
                "orders": 0,
                "sales": 0,
                "createTime": 1541779200000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            },
            {
                "id": 4,
                "disableFlag": null,
                "ids": null,
                "rows": 0,
                "page": 0,
                "pageStart": 0,
                "keywordId": 4,
                "sbidLow": 0.38,
                "sbidMedian": 0.46,
                "sbidHigh": 0.68,
                "keywordBid": 0.75,
                "impression": 1077,
                "spend": 2.48,
                "cpc": 0.62,
                "orders": 0,
                "sales": 0,
                "createTime": 1541865600000,
                "acos": 0,
                "startTime": null,
                "endTime": null
            }
        ],
        "rankList": [],
        "startTime": null,
        "endTime": null
    }
]
     * }
     */
	@RequestMapping("/nlIctQueryAllDataList")
	@ResponseBody
	public Object nlIctQueryAllDataList(Keyword keyword){
		return keywordBo.queryKeywordList(keyword);
	}
	
	/**
     * @api {get} /keyword/main/nlIctSetGroupMutiple.do 批量设置分组
     * @apiGroup Keyword
     * @apiParam {int} groupId 分组id
     * @apiParam {int[]} keyword keyword的id数组
     * @apiSuccessExample Success-Request:
     * {
     * 	groupId:1,
keywordArr:[1, 2]
     * }
     * @apiSuccessExample Success-Response:
     * {
     * 	"ok"
     * }
     */
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
