var menulist = "";
function son(menu){
	if(menu.sonlist != null && menu.sonlist != ""){
		if(menu.grade == 1){
			menulist += '<li><span class="ul-focus-bg"></span>'+menu.name+'<span class="ul-click-bg"><img src="../mu/images/triangle.png" alt="" /></span></li><ul class="ul-inside">';
		}
		for(var e=0;e<menu.sonlist.length;e++){
			son(menu.sonlist[e]);
		}
		menulist += '</ul>';
	}
	if(menu.sonlist == null || menu.sonlist == ""){
		if(menu.grade == 2){
			menulist += '<li title="'+menu.url+'"><span>-</span> <a>'+menu.name+'</a></li>';
		}
	}
}
$(document).ready(function(){
	$.ajax({
		url:'../tree/menu',
		type:'POST',
		async:false,
		dataType:'json',
		success:function(data){
			for(var b = 0 ; b<data.length ; b++){
				var menu = data[b];
				son(menu);
			}
			$("#boxscroll").append(menulist);
			// console.log(document.querySelector('#boxscroll').innerHTML);
		},
		error:function(data){
			console.log('22112211');
		}
	})

	//测试li点击跳转right
	$("aside ul ul li a").click(function  () {
		parent.document.getElementsByTagName("frame")[2].src = $(this).closest("li").attr("title");
//				parent.document.getElementsByTagName("frame")[2].src = $(this).prop("href");
	});
	var deg = 0;
	$(".aside-on-off").click(function(){
		$(".aside-on-off").find("img").addClass("rotate");
		deg += 180;
		$(".aside-on-off").find("img").css("transform","rotate("+deg+"deg)");
//				$("aside").toggleClass("aside-hide");
		if ($("aside").css("display") == "block") {
			$("aside").css("display","none");
			parent.document.getElementsByTagName("frameset")[1].cols = "15,*";
		} else{
			$("aside").css("display","block");
			parent.document.getElementsByTagName("frameset")[1].cols = "216,*";
		}
		//left左侧frame背景设置
		if ($(parent.frames["right"].document).find(".pop-bg").css("display") == "block") {
			//设置inline兼容IE，同时遮罩层要用块级元素
			$(".pop-bg").css("display","block");
		}
		if ($("aside").css("display") == "block") {
			$(".pop-bg").css("display","none");
		}
	});

	$("aside>ul>li").click(function(){
		//右侧内容设置
		$(parent.frames["right"].document).find(".art-li-cont").html(">"+"&nbsp"+$(this).text());
		if ($(parent.frames["right"].document).find(".art-li-li-cont").text()!="") {
			$(parent.frames["right"].document).find(".art-li-li-cont").text("");
		}

		//左侧聚焦小色块
		$("aside>ul>li").find(".ul-focus-bg").removeClass("ul-focus-b");
		$(this).find(".ul-focus-bg").addClass("ul-focus-b");
//
		//收缩
		for (var i = 0; i < $("aside>ul>li").length; i++) {
			if (i==$(this).index()/2) {
				$(this).next("ul").slideToggle(200);
			} else{
				$("aside ul ul").eq(i).slideUp(200);
			}
		}
	});

	$("aside ul ul>li a").click(function(){
//				右侧内容设置
		$(parent.frames["right"].document).find(".art-li-li-cont").html("&nbsp"+">"+$(this).text())

		$("aside ul ul>li").removeClass("li-active");
		$(this).parent().addClass("li-active");
	});

});