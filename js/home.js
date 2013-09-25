$(document).ready(function(){
	window.onscroll = scroll_action;
	team_hover_control();
	team_click_control()
});

function scroll_action(){
	show_header();
	welcome_bg_position();
}

function show_header(){
	yOffset = window.pageYOffset;
	headerOpacity = $("#header-bg").css("opacity");
	iheight = window.innerHeight;
	if( yOffset >= 600 && headerOpacity == 0){
		$("#header-bg").css("opacity","1");
	}else{
		if(yOffset < 600 && headerOpacity > 0){
			$("#header-bg").css("opacity","0");
		}
	}
}

function welcome_bg_position(){
	var yPixel = window.pageYOffset;
	//alert(yPixel);
	$("#d-2").css("top",-Math.floor(yPixel*0.5) + "px");
	$("#d-3").css("top",Math.min(Math.floor(yPixel*0.5), 1865) + "px");	
	$("#d-4").css("top", -yPixel + "px");
}
//controlling the hover behavior for team introduction part
function team_hover_control(){
	$("div.pic-thumbnail").mouseover(function(){
		idOfThis = this.id;
		$.each(
			$("div.pic-thumbnail"), function(key,value){
				if(value.id != idOfThis){
					$("#"+value.id).css("opacity",0);
				}else{
					$("#"+idOfThis).css("opacity",1);
				}
			}
		);
		$("div#team-hover").css("opacity",0.8);
	});
	$("div.pic-thumbnail").mouseout(function(){
		idOfThis = this.id;
		$.each(
			$("div.pic-thumbnail"), function(key,value){
				$("#"+value.id).css("opacity",0.7);
			}
		);
		$("div#team-hover").css("opacity",0.1);
	});
}

//nagivate the lick in team 
function team_click_control(){
	$("div.pic-thumbnail").click(function(){
			if(this.id == "alex-thumbnail"){
				window.open('http://www.facebook.com/luv.sunday', '_blank');
			}
			if(this.id == "ira-thumbnail"){
				window.open("https://www.facebook.com/eahhav","_blank");
		}
	});
}