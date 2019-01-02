
var curr_frame = 1;
console.log("a");


$(window).keypress(function (e) {
var code = e.keyCode || e.which;    
console.log(code);
    if(code == 97) {
     
console.log("c");
     //left arrow
     
     temp = curr_frame - 1;
     if($('#' + temp).length){
            $('#' + temp).removeClass('flip');
            $('#' + curr_frame).addClass('flip');
              curr_frame = curr_frame - 1;

     }
     
     
     
     
     
     
 }else if(code==100){
     console.log("d");

     //right arrow
     
     temp = curr_frame + 1;
     if($('#' + temp).length){
            $('#' + temp).removeClass('flip');
            $('#' + curr_frame).addClass('flip');
              curr_frame = curr_frame + 1;

     }
     
 }
});




