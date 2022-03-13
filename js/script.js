$(document).ready(function(){
  $(".road").hide();
$(".croseover").hover(function(){
    $(this).find(".road").toggle(400);
});

});
$(".click1").click(function(){
    $(".hide1").slideToggle(1000);
    $(".show1").slideToggle(1200);
  });

  $(".click2").click(function(){
    $(".hide2").slideToggle(1000);
    $(".show2").slideToggle(1200);
  });

  $(".click3").click(function(){
    $(".hide3").slideToggle(1000);
    $(".show3").slideToggle(1200);
  });
  $("button").click(function(event) {
       let client = document.getElementById('nameDetail').value;
       alert('Thanks ' + ' we have received your message successful. ' + '!');
       event.preventDefault();
   });
  //  *************RESET FORM*****************
   $("button").on('click', function(){
     $('form').each(function(){
       this.reset();
     });
 });
  

