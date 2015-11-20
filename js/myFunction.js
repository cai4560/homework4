var bookmarks;
var url = "bookmarks.json";

//���а�����$(document).ready()�����Ԫ�ػ��¼���������DOM��ɼ���֮����������
$(document).ready(function() {
	$.ajaxSettings.async = false;		//����ͬ������
	$.getJSON(url, function(Para) {
		bookmarks = Para;
	});
	Initiation();
	Search();
});

function Initiation() {
	var contentStr = _.chain(bookmarks).map(function(Para) {		
		return createBookmarks(Para.title, Para.created);
	}).value(); //��ʾ���� lodash.js
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
	//getMonth()�ķ���ֵ��0��11֮���һ������...
	return time.getUTCFullYear() + "-" + (time.getUTCMonth()+1) + "-" + time.getUTCDate();
}
