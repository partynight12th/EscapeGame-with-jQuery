// JavaScript Document
$(function(){
	//click検知
	var mousedownflag = false;
	var dragflag = false;
	var mouseDownX = -1;
	var mouseDownY = -1;
	
	$("#field").bind("mousedown", 
		function(e){
			mousedownflag = true;
			mouseDownX = e.pageX;
			mouseDownY = e.pageY;
			}
	);
	$("#field").bind("mouseup",
		function(e){
			mousedownflag = false;
			if(!dragflag){
				displayMessage("");
				hitCheck(e.pageX, e.pageY);
			}else{
				$("#stage1").animate({left: 0});
				$("#stage2").animate({left: 800});
				$("#stage3").animate({left: 1600});
				$("#stage4").animate({left: -800});
			}
			dragflag = false;
		}
	);
	
	$("#field").bind("mousemove",
		function(e){
			if(mousedownflag){
				dragflag = true;
				//displayMessage("X : " + e.pageX + ",  Y : " + e.pageY);
				var diff = e.pageX - mouseDownX;
				var s1diff =  $("#stage1").position().left + diff;
				var s2diff =  $("#stage2").position().left + diff;
				var s3diff =  $("#stage3").position().left + diff;
				var s4diff =  $("#stage4").position().left + diff;
				$("#stage1").css({"left": s1diff});
				$("#stage2").css({"left": s2diff});
				$("#stage3").css({"left": s3diff});
				$("#stage4").css({"left": s4diff});
				//displayMessage(s1diff);
				mouseDownX = e.pageX;
				mouseDownY = e.pageY;
			}
		}
	);
});

hitCheck = function(x, y){
	//alert(x + ", " + y);
	if(254<x && x<280 && 350<y && y<387){
		displayMessage("脱出だ！");
	}
}

displayMessage = function(message){
	$("#message").html(message);
}