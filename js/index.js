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

// $("div,p,aside,span").click(function () {
    // next 
    // $(this).next(".next").fadeOut();
    // $(this).next("").fadeOut();
    // $(this).nextAll("").fadeOut();
    // $(this).nextAll(".next").fadeOut();
    // accordino 
    // $(this).next().slideToggle();
    // $(this).nextUntil(".next").fadeOut();
    // $(this).nextUntil("").fadeOut();
    // // prev 
    // $(this).prev().fadeOut();
    // $(this).prev(".next").fadeOut();
    // $(this).prevAll("").fadeOut();
    //   $(this).prevAll(".prevent").fadeOut();
    //   $(this).prevUntil().fadeOut();
    //  $(this).prevUntil(".prevent").fadeOut();
    
// })
//  first , last , equal  
//   $("div").first().next().css("color","red");
//   $("div").last().prev().css("color","red");
//   $("div").eq(3).css("color", "white");
//   $("div").filter(":contains('jquary')").css("color","red");
//   $("div").filter(".jquary").css("color","red");
//   $("div").filter(function (osama) {
//     return osama === 2
//   }).css("color","red");
//  $("div").not(":contains('jquary')").css("color","red");
//   $("div").not(".jquary").css("color","red");
//  $("div").not(function (osama) {
//    return osama === 2
// }).css("color","red");
// $("div").not("").css("color","red"); 
// $("div").filter("").css("color","red"); 
// selcroe 
// $("div:even").css("color","red");
//  $("div:last").css("color","red");
//  $("div:first").css("color","red");
//  $("div:odd").css("color","red");

///  first last // 
//  $("p:first").css("border","5px solid red") ;
//  $("p:last").css("border","5px solid red");

// first 
// $("p:first-child").css("border","5px solid red");
// $("p:last-child").css("border","5px solid red");
// first-type last-type 
// $("p:first-of-type").css("border","5px solid red");
// $("p:last-of-type").css("border","5px solid red");
// nth-child 
// $("p:nth-child(6)").css("border","5px solid red");
// $("p:nth-child(3)").css("border","5px solid red");
// $("p:nth-child(3)").css("border","5px solid red");
//  $("p:nth-last-child(4)").css("border","5px solid red");

// nth-type 
// $("p:nth-of-type(2)").css("border","5px solid red");
// $("p:nth-last-of-type(2)").css("border","5px solid red");

// 
// $("p:only-child").css("border","5px solid red");
// $("p:only-of-type").css("border","5px solid red");
// $("div > p").css("border","5px solid red");
// $("div + p").css("border","5px solid red");
// $("div p").css("border","5px solid red");
// $(" div:eq(3)").css("border","5px solid red");
// $("div:not(:contains('5'))").css("border","5px solid red");
// $(" div:gt(3)").css("border","5px solid red");
// $(":header").css("border" ,"5px solid red");
// $(".amira").animate({width:'600px'},8000 )
// $(":animated").css("border",)"5px solid black";
// $("input").focus();
// $(":focus").css("border","5px solid black"); 
// $("div:contains('enas')").css("color","red");
// $("div:has('p')").css("color" ,"blue");
// $("div:empty").text("enas madina").css("color" ,"blue");
// $("div:parent").css("color" ,"blue");
// $(":hidden").css("display", "block") ;

// $("div:visible").css("border","5px solid black");
// $(":root").css("border","5px solid black");
// $("div:lang('ar')").css("border","5px solid black");
// $(":input").css("border" ,"5px solid red");
// $(":file").css("border" ,"5px solid red");
// $(":disabled").css("border" ,"5px solid red");
// $(":enabled").css("color","red")
// $(":checked").css("border","5px solid red")
// $(":selected").css("color","red") ;
// click 
// $(".normal").click(function () {
//     $(this).hide();
// })
// mouse enter and mouse leave 
// $(".normal").mouseenter(function () {
//     $(this).css("color","blue");
//     $(this).toggleClass("color")
// })
// $(".normal").mouseleave(function () {
//     $(this).css("color","red");
//     $(this).toggleClass("color")
// })
// bind  function 

// $(".normal").bind("mouseenter","mouseleave",function () {
//     $(this).toggleClass("color");
    
// })
// map function 

// $(".normal").bind({
//     click:function () {
//         $(this).text("you have clicked in it ")
//     },
//     dblclick:function (params) {
//         $(this).text("you have  double clicked in it ")
//     }

// })


// custom event

// $(".normal").bind("mycustomevent",function (event,myname,mycolor,mywidth,myheight,mybackcolor) {
//     $(this).text("hello " + myname ).css("color",mycolor).width(mywidth).height(myheight).css("background-color",mybackcolor);
//     // $(this).css("background-color",mybackcolor)
// })

// live and click 
// $("button").click(function () {
//     $(".normal").trigger("mycustomevent",[ "enas","red","300px","600px","blue"])
// })
// $("span").live("click",function () {
//     $("<input type='file'> <span> + </span>").insertAfter($(this));
// })


// $("span").click(function () {
//     $("<input type='file'> <span> + </span>").insertAfter($(this));
// })

// delegate 


// $("body").delegate("span","click",function () {
//     $("<input type='file'> <span> + </span>").insertAfter($(this));
// })


// event on 

// $(".normal").on("click",function () {
//     $(this).hide();
// })


 // multi event 
// $(".normal").on("mouseenter mouseleave",function () {
//     // $(this).hide();
//     $(this).css("color","red");
// })

// custom event 
// $(".normal").on("mycustom",function (event) {
//     $(this).hide();
// })
// $("button").click(function () {
//     $(".normal").trigger("mycustom");
// })

// map event by on 
// $(".normal").on({
//     click:function () {
          
//         $(this).css("color","red");  
//     },
//     dblclick:function () {
//         $(this).hide();
//     }
// })

// PREVENTDEFAULT

// $("a").on("click",function (event) {
//    event.preventDefault();
//    if(event.isDefaultPrevented()){
//     $("div").text(" this is  no a work")
//    }
// })


//  keyup and keydown 
// $("input").on("keydown",function () {
//     $("div").text($("input").val());
// })
// $("input").on("keyup",function () {
//     $("div").text($("input").val());
// })
// $("input").on("keypress",function () {
//     $("div").text($("input").val());
// })

/// change 
// $("input").on("change",function () {
//     $("div").text($("input").val());
// })
// $("select").on("change",function () {
//     $("div").text($("select").val());
// })
// $("input").on("blur",function () {
//      const value = $(this).val();
//      if(value === "enas")
//      {
//         $("div").fadeIn("3000",function () {
//             $(this).fadeOut(2000);
//         }).text("this is your great ")
//      }
//      else{
//         $("div").fadeIn("3000",function () {
//             $(this).fadeOut(2000);
//         }).text("this is no requaried ")
//      }
// })
// focus and blur 
// $("input").on("focus",function () {
//     const value = $(this).val();
//     if(value === "enas")
//     {
//        $("div").fadeIn("3000",function () {
//            $(this).fadeOut(2000);
//        }).text("this is your great ")
//     }
//     else{
//        $("div").fadeIn("3000",function () {
//            $(this).fadeOut(2000);
//        }).text("this is no requaried ")
//     }
// }
// event one 

// $("div").one("click dblclick",function () {
//     $(this).animate({
//         fontSize:"+=3px" 
//     })
// })
// $("div").on("click dblclick",function () {
//     $(this).animate({
//         fontSize:"+=3px" 
//     })
// })
  

// event select 

// $("p").on("click",function () {
//     $(this).select();
// })
$("p").select(function () {
    // $(this).FadeOut();
    console.log("enas madina ")
});

// $("textarea").select(function () {
//     console.log("enas madina ")
// });
// $("input").select(function(){
//     $("input").after(" Text marked!");
//   });
//   $("button").click(function(){
//     $("input").select();
//   }); 

// resize 
// $("section").height($(window).height());
// $(window).on("resize",function () {
//    $("section").height($(window).height());
//     var widths = $(window).width(),
//        heigh= $(window).height();
//        console.log(widths,heigh)
//        if(widths < 750){
//         $("div").addClass("hidden")
//        }
//        else{
//         $("div").removeClass("hidden")
//        }
// })

// scroll 

// $(window).on("scroll",function () {
//    var sc = $(window).scrollTop() ;
//    console.log(sc);
//    if(sc> 1200){
//     $("div").fadeOut();
//    }
//    else{
//     $("div").fadeIn();
//    }
// })
// page x and page y 

$(window).mousemove(function (e) {
  $("span").text("x-axias:" + e.pageX +" y-axias:" + e.pageY  )  ;

})
$("html").on("click",function (e) {
    $(".Sircle").show().offset({
        left:e.pageX,
        top:e.pageY
    })
})













})

