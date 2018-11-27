var getInputDate = function(str){
	if(str == "") return null;
	var strArr = str.split("-");
	var date = new Date(strArr[0], strArr[1]-1, strArr[2]);
	return date;
}

var getStartTime = function(endTime, days){
	var dayMilliseconds = 24 * 60 * 60 * 1000;
	var diffMilliseconds = dayMilliseconds * days;
	return endTime - diffMilliseconds;
}
/**
 * 格式化时间
 * @param {Object} second
 */
var formatTimeStr = function(second, showSecond){
	var time = new Date(second);
	
	var showTimeStr = (1900 + time.getYear()) + "-" + addZero(time.getMonth() + 1) + "-" + addZero(time.getDate());
	if(showSecond) showTimeStr += "&nbsp;&nbsp;" + addZero(time.getHours()) + ":" + addZero(time.getMinutes());
	return showTimeStr;
}

/**
 * 时间加零
 * @param {Object} num
 */
var addZero = function(num) {
	if (num < 10) {
		num = "0" + num;
	}
	return num;
}