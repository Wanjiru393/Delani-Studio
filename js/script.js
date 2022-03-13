
// $(document).ready(function(){
//   $(".road").hide();
// $(".croseover").hover(function(){
//     $(this).find(".road").toggle(400);
// });

// });
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
$(document).ready(function(){
    $('#submission').submit(function(event){
        var display1 = $('input:name').val();
        var display2 = $('input#email').val();
        if(display1 && display2 != ''){
            alert ('Thank you ' + display1 + 'for your subscription');
        }else {
            alert ('Invalid input');
        }
        event.preventDefault();
    })
});