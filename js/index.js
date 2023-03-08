$(document).ready(function() {
//    $("p").hide() ;
// $("p").css("color","red");
// $("button").click(function () {
//     $("p").css("color","red"); 
//     $(this).css("color","red");
// })

//  event in jquary 
// $("button").dblclick(function () {
//     $(this).css("color","red");  
// })
// $("button").mouseenter(function () {
//     $("p").css("color","red");
// })
// $("button").mouseleave(function () {
//     $("p").css("color","red"); 
// })
 
// hover comit to mouseenter and mouseleave 

// $("button").hover(function () {
//     $("p").css("color","red"); 
// },
// function () {
//     $("p").css("color","blue");   
// }
// )
//  effect in jquary 

// $("button").click(function() {
//     //  $("p").hide(5000,function () {
//     //     $("span").css("color","red");
//     //  });
//      $("p").toggle(5000,function () {
//         $("span").css("color","red");
//         $("button").hide();
//      });
//     $("span").toggle();

// })

/// effect fade-in and fade-out 
// $("button").click(function () {
//     $("div").fadeIn(5000,function () {
//         $("p").hide();
//     }) 
// })
// $("button").click(function () {
//     $("div").fadeOut(5000,function () {
//         $("p").show();
//     }) 
// })
// $("button").click(function () {
//     $("div").fadeToggle(5000,function () {
//         $("p").fadeToggle(4000);
//     }) 
// })
// $("button").click(function () {
//     $("div").fadeTo(4000,0.5,function () {
//         $("p").show(); 
//     })
// })

// slidedown and slideup 

// $(".first").click(function () {
//     $(".seconed").slideDown( 8000,function () {
//         $(".first").hide() ;
//     });
// })

// $(".first").click(function () {
//     $(".seconed").slideUp( 8000,function () {
//         $(".first").hide() ;
//     });
// })
$(".animate").animate({
   width:'900px',
   opacity:'0.2',
   left:'30px',
   top:'40px',
  

},8000)
$(".animate-1").animate({
    width:'900px',
    opacity:'0.2',
    left:'30px',
    top:'40px',
   
 
 },8000)


})