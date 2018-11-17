
// console.log("The original data is: "+CONFIG.COLOR);

/* 注意，在使用result对象的时候不需要写data，直接写result.map_items即可获取到map_items的内容 */
var result = null;
console.log(result)
/* 解释： */
var refresh = function(){
//	initFake();
//	// result.refresh();
//	console.log(result.map_names);
//	var deal = [];
//	for (var i = 0; i < DATA.FAKE.KEYWORD_NAME.length; i++) {
//		var id = "mapid_"+DATA.FAKE.KEYWORD_NAME[i];
////		console.log(id);
//		deal.push(id);
//	}
//	for (var i = 0; i < deal.length; i++) {
//		var temp = echarts.init(document.getElementById(deal[i]));
//		// 为echarts对象加载数据 
//		temp.setOption(getMapOptionByIndex(i));
//  	DATA.FAKE.CurrentIndex += 1;
//	}
//	 for (var i in result.map_names) {
//	 	var id = "mapid_"+result.map_names[i];
//	 	console.log(id);
//	 	var temp = echarts.init(document.getElementById(id));
//	 	// 为echarts对象加载数据 
//	 	temp.setOption(getMapOptionByIndex(i));
//	 }
	var params = {
//		"id": 17,
		"startTime": Date.parse(new Date(2018, 11-1, 9)),
		"endTime": Date.parse(new Date(2018, 11-1, 11)),
		"page": 1,
		"rows": 4
	}
////	console.log(Date.parse(new Date(2018, 11-1, 10)) + "--" + Date.parse(new Date(2018, 11-1, 11)))
	ajaxObj.sendAjax("queryKeywordList", params, function(data){
    	console.log(data)
    	getTotalChartData(data)
//  	getChartData(data);
    	updateChart();

    	/* jQuery效果 */
    	$(document).ready(function(){
    		
			$(".map").hover(function(){
			    DATA.FAKE.CurrentIndex = $(this).attr("mapid");
			    
			});

			$('.map_button button').hover(function(){
				$('.map_button button').attr('style','background-color: #DAE1E7;color: #757575;');
				$(this).attr('style','background-color: #03A9F4;color: white;');
				// alert("hover");
			},function(){
				$(this).attr('style',$(this).attr('style'));
			});

			$('.map_button button').click(function(){
				$(this).attr('style','background-color: #328BC7;color: white;');
			});

			$('#filter_button').click(function(){
				// $('.hidden_div').attr('style','display:block');
				$('.hidden_div').show();
			});

		})
    })
}



var updateChart = function(){
	if(!result) 
	result = new Vue({
	    el:'.main',
	    data: {
	    	map_names:DATA.FAKE.KEYWORD_NAME,
	        map_items:DATA.FAKE.KEYWORD_DATA
	    },
	    methods: {
	    	refresh: function(){
				console.log(this.map_names);
				for (var i in this.map_names) {
					var id = "mapid_"+this.map_names[i];
					console.log(id);
					var temp = echarts.init(document.getElementById(id));
					// 为echarts对象加载数据 
					temp.setOption(getMapOptionByIndex(i));
				}
			}
	    }
	});
	
	console.log(result.map_names);
	var deal = [];
	for (var i = 0; i < DATA.FAKE.KEYWORD_NAME.length; i++) {
		var id = "mapid_"+DATA.FAKE.KEYWORD_NAME[i];
		console.log(id);
		deal.push(id);
	}
	for (var i = 0; i < deal.length; i++) {
		var temp = echarts.init(document.getElementById(deal[i]));
		// 为echarts对象加载数据 
		temp.setOption(getMapOptionByIndex(i));
    	DATA.FAKE.CurrentIndex += 1;
	}
	
}

refresh();


// $("#go").click(function(){
//     refresh();
// });

