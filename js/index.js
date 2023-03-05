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

$("button").click(function() {
    //  $("p").hide(5000,function () {
    //     $("span").css("color","red");
    //  });
     $("p").toggle(5000,function () {
        $("span").css("color","red");
        $("button").hide();
     });
    // $("span").toggle();

})

})