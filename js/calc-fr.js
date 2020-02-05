$(document).ready(function(){
	$(".calculator").append('');
  $("#size").click(function(){
    let windNum = $(".windNum").val();
    for (var i = 0; i < windNum; i++) {
      var tempNum = i+1; 
      $(".calculator").append('<div class="window">    <p id="number" class="description">'+ tempNum +'-Fenêtre: </p>  <div class="description"><p class="description">Largeur (cm):	&nbsp;</p><input type="text" class="width" value="1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>  <div class="description"><p class="description">Hauteur (cm):	&nbsp;</p><input type="text" class="height" value="1">&nbsp;</div>  </div>');
    }
    $("#calc").show();
    $("#size").hide();
    $("#reset").show().css("display","block");
       $(".width").keypress(function (e) {
       	   	console.log(e.which);
     if (e.which != 8 && e.which != 0 && (e.which < 46 || e.which == 47 || e.which > 57)) {
      $("#errmsg").html("Number Only").stop().show().fadeOut("slow");
      return false;
    }
   });
   $(".height").keypress(function (e) {
     if (e.which != 8 && e.which != 0 && (e.which < 46 || e.which == 47 || e.which > 57)) {
      $("#errmsg").html("Number Only").stop().show().fadeOut("slow");
      return false;
    }
   });
  });
  
  $("#reset").click(function(){
    $(".window").remove();
    $("#calc").hide();
     $("#size").show();
    $("#total").text("$4.99");
	$("#all").text("1");
    $("#reset").hide();
    $("#totalSect").hide();
  });
  
	$("#calc").click(function(){
    var widthArr = $(".width");
    var heightArr = $(".height");
    var totalSize = 0;
    for (var i = 0; i < widthArr.length; i++) {
      totalSize += widthArr[i].value * heightArr[i].value; 
    }
    var price = $(".price").data("price")*0.0001;
    var total = price * totalSize;
    console.log(price,total);
    total = total.toFixed(2);
	$("#total").text(total+"CHF");
	$("#all").text(totalSize/10000);
	$("#totalSect").show();
    });

   $(".windNum").keypress(function (e) {
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      $("#errmsg").html("Number Only").stop().show().fadeOut("slow");
      return false;
    }
   });
	});