var temp="";
$(function(){
	$( "#dialog-confirm" ).dialog({
		autoOpen: false,
		resizable: false,
		height:140,
		modal: true,
		buttons: {
			"确定": function() {
				deleteFare();
			},
			'取消': function() {
				$( this ).dialog( "close" );
			}
		}
	});
	$( "#dialog-form" ).dialog({
		autoOpen: false,
		height: 300,
		width: 550,
		modal: true,
		buttons: {
			"确     定": function() {
				CheckTransfer(this);
			}
		}
	});
	$( "#fare-type" ).dialog({
		autoOpen: false,
		resizable: false,
		height:140,
		modal: true,
		buttons: {
			"确定": function() {
				var _fareType=$("[id^=addFareType]").val();
				if(_fareType==''){
					alert("请选择添加的产品类型!");
				}else{
					location.href="${pageContext.request.contextPath}/interFare/otherFareInter_toAdd.action?fareType="+_fareType;
				}
			},
			'取消': function() {
				$( this ).dialog( "close" );
			}
		}
	});
	
	$("[id^=showTransferUser_]").click(function(){
		var id = $(this).attr("id").substring("showTransferUser_".length);
		$( "#dialog-form" ).dialog( "open" );
		var html="";
		$.ajax({
			type: "POST",
			url: getAppcationName()+"/interFare/showTransferUser.action",
			data:  {'baseFareId':id},
			dataType:'json',
			async:false,
			success: function(msg){
				var callback = eval("("+msg+")");//包数据解析为json 格式 
				$.each(callback,function(ii,vv){
					html+="<tr class='line' onMouseOver=\"this.style.backgroundColor='#e1f0fb'\" onMouseOut=\"this.style.backgroundColor='#FFFFFF'\" bgcolor=\"#FFFFFF\">";
					html+="<td>"+vv.userName+"</td>";
					html+="<td>"+vv.groupName+"</td>";
					html+="<td>"+vv.deptName+"</td>";
					html+="<td>";
					if(vv.auditStatus==1){
						html+="已审核";
					}else{
						html+="未审核";
					}
					html+="</td>";
					html+="<td>"+vv.crtDate+"</td>";
					html+="</tr>";
				});
				$("#body_transferUser").html(html);
			}});

	});
	
	
	
	$("#btn_new").click(function(){
		$( "#fare-type" ).dialog("open");
	});
	
	
	$("#btn_search").click(function(){
		$("#otherFareSearch").submit();
	});
	$("#btn_reset").click(function(){
		$("#statusQuery").val("");
		$("#fareFileNameQuery").val("");
		$("#fareFileNoQuery").val("");
		$("#applyDeptQuery").val("");
		$("#startDate").val("");
		$("#endDate").val("");
	});
	$("[id^=update_]").click(function(){
		var id = $(this).attr("id").substring("update_".length);
		var status=$("#checkbox_"+id).attr('fareStatus');
		var signFlag=$("#checkbox_"+id).attr('signFlag');
		if(status!='0001'&& status!='1010'){
			openMessage("新建或审核退回的运价才能允许修改！");
			return false;
		}
		if(signFlag=='1'){
			openMessage("平级传送状态下，运价不允许修改！");
			return false;
		}
		
		location.href="${pageContext.request.contextPath}/interFare/otherFareInter_toEdit.action?baseFareId="+id;
	});
	$("[id^=show_]").click(function(){
		var id = $(this).attr("id").substring("show_".length);
		location.href="${pageContext.request.contextPath}/interFare/otherFareInter_view.action?baseFareId="+id;
	});
	$("[id^=delete_]").click(function(){
		var id = $(this).attr("id").substring("delete_".length);
		temp=id;
		var status=$("#checkbox_"+id).attr('fareStatus');
		var signFlag=$("#checkbox_"+id).attr('signFlag');
		if(status!='0001' && status!='1001'){
			openMessage("新建或者审核不通过的运价才能进行删除");
			return false;
		}else if(signFlag=='1'){
			openMessage("平级传送状态下，运价不允许删除！");
			return false;
		}
		$( "#dialog-confirm" ).dialog( "open" );
	
	});
});
function deleteFare(){
	location.href="${pageContext.request.contextPath}/interFare/otherFareInter_del.action?baseFareId="+temp;
}
function CheckTransfer(obj){
	$( obj ).dialog( "close" );
}