var num = 1,
	prog = 1;
$(document).ready(function(){
	document.getElementById("bg1").play();
	
	
	//making the carrot on the barrel appear when clicking on the carrots on the ground
$("#carrot1").click(function(){
	  $("#carrot1").hide();
	  $("#C1").css("display","block");
  });
$("#carrot2").click(function(){
	  $("#carrot2").hide();
	  $("#C2").css("display","block");
  });
$("#carrot3").click(function(){
	  $("#carrot3").hide();
	  $("#C3").css("display","block");
  });
$("#carrot4").click(function(){
	  $("#carrot4").hide();
	  $("#C4").css("display","block");
  });
$("#carrot5").click(function(){
	  $("#carrot5").hide();
	  $("#C5").css("display","block");
  });
$("#carrot6").click(function(){
	  $("#carrot6").hide();
	  $("#C6").css("display","block");
  });
	// refreshing the browser
$("#restart").click(function() {
    window.location.reload();
});
$("#help").click(function(){
	$("#instructions").show();
	$("#close").show();	
});
$("#close").click(function(){
	$("#instructions").hide();
	$("#close").hide();
	})

	
function conditions (){

		if (num == 0){
			document.getElementById("bg1").pause();
			document.getElementById("bunnyshadow").style.display= "none";
			document.getElementById("bunny").style.animationPlayState= "paused";
			$("#deadnotifs").fadeIn(2000);
			$("#restart").fadeIn(2000);
		}else if (num == 5){
			document.getElementById("bite").pause();
			document.getElementById("lastbite").play();
			$("#done").fadeIn(3000);
			$("#C3").draggable("disable");
			$("#C5").draggable("disable")
		}
	}
function progConds(){
				
		if (prog == 0){
			document.getElementById("progress").style.backgroundImage = "url(svg/p1.svg)";
		}
		
	}
	
// drag and drop function
$(function () {
  $("#C1").draggable();
  $("#C2").draggable();
  $("#C3").draggable();
  $("#C4").draggable();
  $("#C5").draggable();
  $("#C6").draggable();

	

  $("#bunnydiv").droppable({
      
        drop: function(event,ui) {
			if(ui.draggable.attr("id") == "C1"){
				num ++;
				prog ++;
				document.getElementById("bite").play();
				ui.draggable.delay(2000).remove();
				document.getElementById("bunnyshadow").style.display= "none";
				document.getElementById("bunny").style.animation= "none";
				document.getElementById("bunny").style.backgroundImage = "url(svg/bunny"+num+".svg)"; 
				
				document.getElementById("progress").style.backgroundImage = "url(svg/p"+prog+".svg)";
				conditions();
				progConds();
				
			   
		   }else if(ui.draggable.attr("id") == "C2"){
			   num ++;
			   prog ++;
			   document.getElementById("bite").play();
			   ui.draggable.delay(2000).remove();
				document.getElementById("bunnyshadow").style.display= "none";
				document.getElementById("bunny").style.animation= "none";
			   document.getElementById("bunny").style.backgroundImage = "url(svg/bunny"+num+".svg)"; 
				
				document.getElementById("progress").style.backgroundImage = "url(svg/p"+prog+".svg)";
			   conditions();
			   progConds();
			   
		   }else if(ui.draggable.attr("id") == "C3"){
			   num --;
			   prog --;
			   document.getElementById("bite").play();
			   ui.draggable.delay(2000).remove();
				document.getElementById("bunnyshadow").style.display= "none";
				document.getElementById("bunny").style.animation= "none";
			   document.getElementById("bunny").style.backgroundImage = "url(svg/bunny"+num+".svg)"; 
				
				document.getElementById("progress").style.backgroundImage = "url(svg/p"+prog+".svg)";
			   conditions();
			   progConds();
		   }else if(ui.draggable.attr("id") == "C4"){
			   num ++;
			   prog ++;
			   document.getElementById("bite").play();
			   ui.draggable.delay(2000).remove();
				document.getElementById("bunnyshadow").style.display= "none";
				document.getElementById("bunny").style.animation= "none";
			   document.getElementById("bunny").style.backgroundImage = "url(svg/bunny"+num+".svg)"; 
				
				document.getElementById("progress").style.backgroundImage = "url(svg/p"+prog+".svg)";
			   conditions();
			   progConds();
		   }else if(ui.draggable.attr("id") == "C5"){
			   num --;
			   prog --;
			   document.getElementById("bite").play();
			   ui.draggable.delay(2000).remove();
				document.getElementById("bunnyshadow").style.display= "none";
				document.getElementById("bunny").style.animation= "none";
			   document.getElementById("bunny").style.backgroundImage = "url(svg/bunny"+num+".svg)"; 
				
				document.getElementById("progress").style.backgroundImage = "url(svg/p"+prog+".svg)";
			   conditions();
			   progConds();
		   }else if(ui.draggable.attr("id") == "C6"){
			   num ++;
			   prog ++;
			   document.getElementById("bite").play();
			   ui.draggable.delay(2000).remove();
				document.getElementById("bunnyshadow").style.display= "none";
				document.getElementById("bunny").style.animation= "none";
			   document.getElementById("bunny").style.backgroundImage = "url(svg/bunny"+num+".svg)"; 
				
				document.getElementById("progress").style.backgroundImage = "url(svg/p"+prog+".svg)";
			   conditions();
			   progConds();
		   }
			
		}

    });


		 
  });

});	

