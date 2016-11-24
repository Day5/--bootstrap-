$(function(){
  $(document).on("click","#signUp, #logIn",function(){
  	$(".signUp, .logIn").toggleClass("toggle");
  	$("#signUp, #logIn").toggleClass("color");
  });
  var options={
  	template:'<div class="tooltip appImg" role="tooltip"><img src="images/app.png"></div>',
  };
  $(".app").tooltip(options);
});
