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

// animate 
// $(".animate").animate({
//    width:'900px',
//    opacity:'0.2',
//    left:'30px',
//    top:'40px',
  

// },8000)
// $(".animate-1").animate({
//     width:'900px',
//     opacity:'0.2',
//     left:'30px',
//     top:'40px',
   
 
//  },8000)

// stop 
// $("button").click(function() {
//    $(".stop").stop(false,true);
// })
// $(".stop").animate({
//    width:'800px',
//    height:'600px'
// },8000)
// $(".stop").animate({
//    width:'300px',
//    height:'600px',
//    opacity:'0.2',
  
// },8000)

/// chain // 
// $(".chain").css({color:"red"})
// .slideUp(2000)
// .fadeIn(3000)
// .fadeOut(5000)
// .slideDown(2000)
// .hide(200)
// .show(3000)
// .animate({width:'600px'})

// text // 

//  var dis = $(".text").text();

// console.log(dis);

// $("p").text(dis);

// html // 

//   var dis = $(".html").html();
//     console.log(dis);
//     $("p").html(dis);
//     $("p").text(dis); 

//     $("button").click(function () {
//         $("input").val($("div").text()) ;  
//          $(".output").text($("input").val()) ; 
//          $("input").val($("a").attr("class")) ;  

//     })
//     $("a").attr("href","https/wwwotr");
//      $("div").attr("class","eng");
//      $(".examp").text( $("div").attr("class"));
   
/// append  // 
$("div").append("<p>elbnaa almangee </p>");
$("div").append("dddd")
$("div").prepend("dddd")
$("div").after("<div> ffff </div>");
$("div").before("<div> ffff </div>");

$("span").click(function () {
    $("input").after(" </br> <input type ='file'/>");
    
})
$("span.add").css({cursor:"pointer"})
$("<p> enas madina </p> ").prependTo("div");
$("<p> enas madina </p> ").appendTo("div");
$("<p></p>",{
    text:"eeenas madhh",
    class:"enas"
}).prependTo("div");


})








