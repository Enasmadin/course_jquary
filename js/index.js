$(document).ready(function() {
//    $("p").hide() ;
// $("p").css("color","red");
// $("button").click(function () {
//     $("p").css("color","red"); 
//     $(this).css("color","red");
// })
$("button").dblclick(function () {
    $(this).css("color","red");  
})
$("button").mouseenter(function () {
    $("p").css("color","red");
})
$("button").mouseleave(function () {
    $("p").css("color","red"); 
})
$("button").hover(function () {
    $("p").css("color","red"); 
},
function () {
    $("p").css("color","blue");   
}
)
})