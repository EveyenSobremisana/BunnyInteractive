$(document).ready(function(){
	

    function movingclouds1(){
   $("#cloud1").animate({left:90 +"%"},10000,"linear");
   $("#cloud1").animate({left:5+"%"},10000,"linear", movingclouds1);}    
    function movingclouds2(){
   $("#cloud2").animate({right:80 +"%"},10000,"linear");
   $("#cloud2").animate({right:5+"%"},10000,"linear", movingclouds2);}
    
    function movinghands(){
        $("#bunnyHands").animate({top:48 +"%"},"ease");
        $("#bunnyHands").animate({top:50 +"%"},"ease",movinghands);
	}
	function apples1falling(){
	 $("#a1").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	 $("#a2").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	 $("#a3").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	 $("#a4").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	 $("#a5").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	}	
	function apples2falling(){
	 $("#a6").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	 $("#a7").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	 $("#a8").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	 $("#a9").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	 $("#a10").delay( 600 ).animate({top:170 +"%"},1000,"linear");
	}

    
    
//    $("#treeleaves").click(function(){
//        document.getElementById("treesound").play();
//        $("#apple1").delay( 2000 ).animate({top:50 +"%"},1000,"linear");
//        $("#apple2").delay( 2000 ).animate({top:50 +"%"},1000,"linear");
//        $("#apple3").delay( 2000 ).animate({top:50 +"%"},1000,"linear");
//        $("#apple4").delay( 2000 ).animate({top:50 +"%"},1000,"linear");
//        $("#apple5").delay( 2000 ).animate({top:50 +"%"},1000,"linear");
//
//    })



$("#bunny").click(function(){
     $("#bunny").fadeOut();
      $("#hole").fadeIn();
    
})
$("#hole").click(function(){
     $("#hole").fadeOut();
     $("#bunny").fadeIn();
 document.getElementById("hungry").play();
document.getElementById("hungrymsg").style.display = "block";
})
$("#button").click(function(){
	
	 document.getElementById("openingsound").play();
	 document.getElementById("button").style.opacity =  0;
	 document.getElementById("leftC").style.animation = "curtainLeft 10s forwards"; 
	 document.getElementById("rightC").style.animation = "curtainRight 10s forwards"; 

});
$("#sun").mouseenter(function(){
	$("#sun").animate({
		width:"11%"
	});
});
$("#sun").mouseleave(function(){
	$("#sun").animate({
		width:"10%"
	});
});
$("#sun").click(function(){
	$(".flowers").animate({
		height:"100%"},1000);
	$(".apples").animate({
		height:"18%"},500);
})
$("#apple1").click(function(){
	 apples1falling();
});
$("#apple2").click(function(){
	 apples2falling();
});

	
	//animating flowers when you click on it//
$("#flower1").click(function(){
	$("#flower1").animate({
		bottom:75 +"%",
		left: 5 +"%"
	})
	$("#flower1").fadeOut(2000)
});
$("#flower2").click(function(){
	$("#flower2").animate({
		bottom:75 +"%",
		left: 25 +"%"
	})
	$("#flower2").fadeOut(2000)
});
$("#flower3").click(function(){
	$("#flower3").animate({
		bottom:75 +"%",
		left: 45 +"%"
	})
	$("#flower3").fadeOut(2000)
});
$("#flower4").click(function(){
	$("#flower4").animate({
		bottom:75 +"%",
		left: 65 +"%"
	})
	$("#flower4").fadeOut(2000)
});
$("#flower5").click(function(){
	$("#flower5").animate({
		bottom:75 +"%",
		left: 85 +"%"
	})
	$("#flower5").fadeOut(2000)
});
$("#flower6").click(function(){
	$("#flower6").animate({
		bottom:75 +"%",
		left: 95 +"%"
	})
	$("#flower6").fadeOut(2000)
});
});


  
    
   
