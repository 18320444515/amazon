(function(){
	var amazonUrl = "/amazon/";

	var queryUrlObj = {
		"deleteAllData": "keyword/main/nlIctDeleteAllData.do",
		"updateExcel": "keyword/main/nlIctUpdateExcel.do",
		"insertDetail": "keyword/detail/nlIctInsertDetail.do",
		"insertRank": "keyword/rank/nlIctInsertRank.do",
		"updateVolume": "keyword/main/nlIctUpdateVolume.do",
		"queryAllData": "keyword/main/nlIctQueryAllDataById.do",
		"queryDetail": "keyword/detail/nlIctQueryDetail.do",
		"queryKeywordList": "keyword/main/nlIctQueryAllDataList.do",
		"queryAsinList": "keyword/asin/nlIctQueryAsinList.do",
		"insertGroup": "keyword/group/nlIctAddGroup.do",//添加分组
		"changeGroup": "keyword/main/nlIctSetGroup.do",//设置分组(更改分组)
		"deleteGroup": "keyword/group/nlIctDeleteGroup.do"//删除分组

	}
	
	var sendAjax = function(name, params, success){
		if(!queryUrlObj[name]) return;
		if(!params) params = {};
		
		var sendUrl = amazonUrl + queryUrlObj[name];
		$.getJSON(sendUrl, params, function(data){
			console.log(data)
			if(success) success(data);
		})
	}
	
	var a = {
		"sendAjax": sendAjax
	}
	
	window.ajaxObj = a
})()
