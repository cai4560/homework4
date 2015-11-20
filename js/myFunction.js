var bookmarks;
var url = "bookmarks.json";

//所有包括在$(document).ready()里面的元素或事件都将会在DOM完成加载之后立即加载
$(document).ready(function() {
	$.ajaxSettings.async = false;		//发送同步请求
	$.getJSON(url, function(Para) {
		bookmarks = Para;
	});
	Initiation();
	Search();
});

function Initiation() {
	var contentStr = _.chain(bookmarks).map(function(Para) {		
		return createBookmarks(Para.title, Para.created);
	}).value(); //显示调用 lodash.js
	$(".content").html(contentStr);
}
	
function createBookmarks(title, created) {
	var tempmark = '<div>';
	tempmark = tempmark +  '<a href="" class="title">' + title + '</a>'
		    			+  '<p class="created">Created @ ' + getTimeStamp(created) +'</p>'
		    			+  '<div class="split"></div>'
	return tempmark+'</div>';
}
	
function getTimeStamp(timestamp) {
	var time = new Date();
	time.setTime(timestamp*1000);
	//getMonth()的返回值是0到11之间的一个整数...
	return time.getUTCFullYear() + "-" + (time.getUTCMonth()+1) + "-" + time.getUTCDate();
}
