// JavaScript Document
$(function(){
	//根据总页数判断，如果小于5页，则显示所有页数，如果大于5页，则显示5页。根据当前点击的页数生成

	//根据总页数判断，如果小于5页，则显示所有页数，如果大于5页，则显示5页。根据当前点击的页数生成
  var maxPage=$("#countPage").text();
  var pageCount =parseInt(maxPage) ;//模拟后台总页数
	//生成分页按钮
	if(pageCount>3){
		page_icon(1,3,0);
		var index = $("#pageGro ul li.on").index();//获取当前页
		if(index == 0){
			$("#pageGro .pageUp").addClass("disabled");
		}
	}else{
		page_icon(1,pageCount,0);
		var index = $("#pageGro ul li.on").index();//获取当前页
		if(index == 0){
			$("#pageGro .pageUp").addClass("disabled");
		}
	}

	//点击分页按钮触发
	$("#pageGro li").live("click",function(){
		if(pageCount > 3){
			var pageNum = parseInt($(this).html());//获取当前页数
			pageGroup(pageNum,pageCount);
			var index = $("#pageGro ul li.on").index();//获取当前页
			if(index == 0){
				$("#pageGro .pageUp").addClass("disabled");
				$("#pageGro .pageDown").removeClass("disabled");
			}else if(index == 2){
				$("#pageGro .pageDown").addClass("disabled");
				$("#pageGro .pageUp").removeClass("disabled");
			}else{
				$("#pageGro .pageUp,#pageGro .pageDown").removeClass("disabled");
			}
		}else{
			$(this).addClass("on");
			$(this).siblings("li").removeClass("on");
			var index = $("#pageGro ul li.on").index();//获取当前页
			if(index == 0){
				$("#pageGro .pageUp").addClass("disabled");
				$("#pageGro .pageDown").removeClass("disabled");
			}else if(index == 2){
				$("#pageGro .pageDown").addClass("disabled");
				$("#pageGro .pageUp").removeClass("disabled");
			}else{
				$("#pageGro .pageUp,#pageGro .pageDown").removeClass("disabled");
			}
		}
	});

	//点击上一页触发
	$("#pageGro .pageUp").click(function(){
		if(pageCount > 3){
			var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
			pageUp(pageNum,pageCount);
			var index = $("#pageGro ul li.on").index();//获取当前页
			if(index == 0){
				$(this).addClass("disabled");
			}else{
				$(this).removeClass("disabled");
			}
			if($("#pageGro .pageDown").hasClass("disabled")){
				$("#pageGro .pageDown").removeClass("disabled");
			}
		}else{
			var index = $("#pageGro ul li.on").index();//获取当前页
			if(index > 0){
				$("#pageGro li").removeClass("on");//清除所有选中
				$("#pageGro ul li").eq(index-1).addClass("on");//选中上一页
				var newindex = $("#pageGro ul li.on").index();//获取当前页
				if(newindex == 0){
					$(this).addClass("disabled");
				}else{
					$(this).removeClass("disabled");
				}
				if($("#pageGro .pageDown").hasClass("disabled")){
					$("#pageGro .pageDown").removeClass("disabled");
				}
			}
		}
	});

	//点击下一页触发
	$("#pageGro .pageDown").click(function(){
		if(pageCount > 3){
			var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
			pageDown(pageNum,pageCount);
			var index = $("#pageGro ul li.on").index();//获取当前页
			if(index == 2){
				$(this).addClass("disabled");
			}else{
				$(this).removeClass("disabled");
			}
			if($("#pageGro .pageUp").hasClass("disabled")){
				$("#pageGro .pageUp").removeClass("disabled");
			}
		}else{
			var index = $("#pageGro ul li.on").index();//获取当前页
			if(index+1 < pageCount){
				$("#pageGro li").removeClass("on");//清除所有选中
				$("#pageGro ul li").eq(index+1).addClass("on");//选中上一页
				var newindex = $("#pageGro ul li.on").index();//获取当前页
				if(newindex == 2){
					$(this).addClass("disabled");
				}else{
					$(this).removeClass("disabled");
				}
				if($("#pageGro .pageUp").hasClass("disabled")){
					$("#pageGro .pageUp").removeClass("disabled");
				}
			}
		}
	});
});

//点击跳转页面
function pageGroup(pageNum,pageCount){
	switch(pageNum){
		case 1:
			page_icon(1,3,0);
		break;
		case 2:
			page_icon(1,3,1);
		break;
		case pageCount-1:
			page_icon(pageCount-2,pageCount,1);
		break;
		case pageCount:
			page_icon(pageCount-2,pageCount,2);
		break;
		default:
		    page_icon(pageNum-1, pageNum + 1, 1);
		break;
	}
}


//上一页
function pageUp(pageNum,pageCount){
	switch(pageNum){
		case 1:
			break;
		case 2:
			page_icon(1,3,0);
			break;
		case pageCount-1:
			page_icon(pageCount-3,pageCount-1,1);
			break;
		case pageCount:
			page_icon(pageCount-2,pageCount,1);
			break;
	  default:
		   page_icon(pageNum-2, pageNum , 1);
			 break;
	}
}

//下一页
function pageDown(pageNum,pageCount){
	switch(pageNum){
		case 1:
			page_icon(1,3,1);
			break;
		case 2:
			page_icon(2,4,1);
			break;
		case pageCount-1:
			page_icon(pageCount-2,pageCount,2);
			break;
	  case pageCount:
			break;
		default:
			page_icon(pageNum,pageNum+2,1);
			break;
	}
}
//根据当前选中页生成页面点击按钮
function page_icon(page, count, eq) {
	var ul_html = "";
	for(var i=page; i<=count; i++){
		ul_html += "<li>"+i+"</li>";
	}
	$("#pageGro ul").html(ul_html);
	$("#pageGro ul li").eq(eq).addClass("on");
}
