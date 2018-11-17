(function(){
	var amazonUrl = "/amazon/";

	var queryUrlObj = {
		"insertDetail": "keyword/detail/nlIctInsertDetail.do",
		"insertRank": "keyword/rank/nlIctInsertRank.do",
		"updateVolume": "keyword/main/nlIctUpdateVolume.do",
		"queryAllData": "keyword/main/nlIctQueryAllDataById.do",
		"queryDetail": "keyword/detail/nlIctQueryDetail.do",
		"queryKeywordList": "keyword/main/nlIctQueryAllDataList.do"
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
