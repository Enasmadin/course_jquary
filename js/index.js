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
// $("div").append("<p>elbnaa almangee </p>");
// $("div").append("dddd")
// $("div").prepend("dddd")
// $("div").after("<div> ffff </div>");
// $("div").before("<div> ffff </div>");

// $("span").click(function () {
//     $("input").after(" </br> <input type ='file'/>");
    
// })
// $("span.add").css({cursor:"pointer"})
// $("<p> enas madina </p> ").prependTo("div");
// $("<p> enas madina </p> ").appendTo("div");
// $("<p></p>",{
//     text:"eeenas madhh",
//     class:"enas"
// }).prependTo("div");

/// empty //
// $("button").click(function() {
 
//     // $("div").hide();
//     // $("div").remove(".specfic-class");
//     $("div").fadeOut(5000,function () {
//         // $("div").empty();
//         $("div").hide();
//     })
//     // FILTER 
//     $("P").remove(":contains('this') ");
// })

//// get css and set css //// 
// $("button").click(function () {
    //  get 
//     var  color= $("div").css("color")
//    $("input").val($("div").css("padding"));
//    $("<span></span>",{
//     text:color
    
//    }).prependTo("body");

// set 

//  var color = $("input").val();
// // $("div").css("color",color);
// $("div").css({"background":"black","padding":"10px" ,"color":color})



// })

// width // 

// var dw = $(document).width();
// if(dw > 1000)
// {
//     $("body").append("<span> congratulation you in abig screen </span> ")
// }else
// {
//     $("body").append("<span> congratulation you in small screen </span>")
// }

// example 

// $(".specfic-width").click(function () {
//     // $(this).width(500);
//     $(this).width("+=" + 50) // increse 50 each enter  it is important 
//     $(this).text(" your div is "+ $(this).width() + "px")
// })

// $(".left").click(function () {
//     $(this).width("+=" +50) ;
//     $(".right").width("-=" + 50);
// })
// $(".right").click(function () {
//     $(this).width("+=" +50) ;
//     $(".left").width("-=" + 50);
// })
// $(".contents").click(function () {
//     $(this).width("+=" +50) ;
//     if( $(this).width() == 700)
//     {
//         $(this).css(
//             {
//             width:'700px',
//             maxWidth:'700px'
//            }
//         )
//         console.log("this is width " + $(this).width() + 'px')
//     }
   
    // console.log( $(this).width());
    // console.log( $(this).innerWidth());
    // console.log( $(this).outerWidth(true));

    // height // 
    // console.log( $(this).height());
    // console.log( $(this).innerHeight());
    // console.log( $(this).outerHeight(true));
// })

// parent 

//  $("span").parent().css("border","3px  solid red") ;
//  $("span").parents().css("border","3px  solid red") ;
// $("span").parents(".parenttop").css("border","3px  solid red") ;
// $("span").parentsUntil("section").css("border","3px  solid red") ;

// children
 // children choose  just dirctly   
// $("section").children("").css("border","3px  solid red");
// $("section").children(".parenttop").css("border","3px  solid red");
//  $("section").children("p:contains('love')").css("border","3px  solid red");
//  $("section").children("p").css("border","3px  solid red");

//  find 

// choose  any not just directly and object too  
//  $("section").find("p:contains('love')").css("border","3px  solid red");

// sibling // 
// $(".siblings").siblings("p").css({color:"red" ,backgroundcolor:"red"});
// $("div,p").click(function() {
//   $(this) .siblings().css("color","red") ;
// })

///  next and  prev 

$("div,p,aside,span").click(function () {
    // next 
    // $(this).next(".next").fadeOut();
    // $(this).next("").fadeOut();
    // $(this).nextAll("").fadeOut();
    // $(this).nextAll(".next").fadeOut();
    // accordino 
    // $(this).next().slideToggle();
    // $(this).nextUntil(".next").fadeOut();
    // $(this).nextUntil("").fadeOut();
    // prev 
    // $(this).prev().fadeOut();
    // $(this).prev(".next").fadeOut();
    // $(this).prevAll("").fadeOut();
    //   $(this).prevAll(".prevent").fadeOut();
    //   $(this).prevUntil().fadeOut();
     $(this).prevUntil(".prevent").fadeOut();



})




})








