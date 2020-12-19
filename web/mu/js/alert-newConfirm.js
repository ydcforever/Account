//重构alert,confirm
$(function  ($) {
	$.alerts = {
		alert: function(message) {
			$.alerts._show(message, 'alert');
		},
		newConfirm: function(message,callback) {
			$.alerts._show(message,'newConfirm',function  (result) {
				if(callback) callback(result);
			});
		},
		_show: function(msg,type,callback) {
			var _html = "";
			_html += '<div class="pop-out" ><div class="pop-outBg"></div>';
			_html += '<div class="pop-content"><div class="pop-title"></div><div class="pop-msg">' + msg + '</div>';
//			_html += '<div id="pop-but">';
			if(type == "alert") {
				_html += '<div class="pop-sele"><a class="btn-sure" id="btn_ok">确定</a></div>';
			}
			if(type == "newConfirm") {
				_html += '<div class="pop-sele"><a class="btn-sure" id="btn_ok">确定</a>';
				_html += '<a class="btn-off" id="btn_no">取消</a></div>';
			}
			_html += '</div></div></div>';
			//必须先将_html添加到body，再设置css样式  
			$("body").append(_html);
			switch(type) {
				case 'alert':
					$("#btn_ok").click(function() {
						$.alerts._hide();
					});
					$(".pop-close").click(function() {
						$.alerts._hide();
					});
					break;
				case 'newConfirm':
					$("#btn_ok").click(function() {
						$.alerts._hide();
						if(callback) callback(true);
					});
					$("#btn_no").click(function() {
						$.alerts._hide();
						if(callback) callback(false);
					});
					$(".pop-close").click(function() {
						$.alerts._hide();
					});
					break;
			}
		},
		
		_hide: function() {
			$(".pop-out").remove();
		}
	};
	// Shortuct functions  
	alert = function(message) {
		$.alerts.alert(message);
	};

	newConfirm = function(message,callback) {
		$.alerts.newConfirm(message,callback);
	};
});
	