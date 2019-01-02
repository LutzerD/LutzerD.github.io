
function flipIconIntroOut1(){ 
        console.log("2");

    $('#intro-team-photo-1').addClass('rollIn');
    $('#intro-team-photo-1').removeClass('flipOutX');
//    $('.intro-team-photo-1').css({'-webkit-filter':'grayscale(0%)',
//                                  '-moz-filter':'grayscale(0%)',
//                                  '-webkit-filter':'grayscale(0%)',
//                                  '-o-filter':'grayscale(0%)',
//                                  '-ms-filte':'grayscale(0%)',
//                                  'filter':'grayscale(0%)'
//                                 });
    $('#intro-team-photo-1').removeClass('gray-ts-intro-1');
    $('#intro-team-photo-1').addClass('rollIn');

    setTimeout(flipIconIntroIn1, 2000);  
};
function flipIconIntroIn1(){
    console.log("1");
    
    $('#intro-team-photo-1').removeClass('flip');
    $('#intro-team-photo-1').addClass('flipOutX');
    $('#intro-team-photo-1').removeClass('rollIn');
    $('#intro-team-photo-1').addClass('gray-ts-intro-1');

//    $('.intro-team-photo-1').css({'-webkit-filter':'grayscale(100%)',
//                                  '-moz-filter':'grayscale(100%)',
//                                  '-webkit-filter':'grayscale(100%)',
//                                  '-o-filter':'grayscale(100%)',
//                                  '-ms-filte':'grayscale(100%)',
//                                  'filter':'grayscale(100%)'
//                                 });
    
    setTimeout(flipIconIntroOut1, 10000);  
};
flipIconIntroIn1();

//function changeTitle() {
//    var title = $(document).prop('title'); 
//    if (title.indexOf('>>>') == -1) {
//        setTimeout(changeTitle, 3000);  
//        $(document).prop('title', '>'+title);
//    }
//}
//changeTitle();
//
//
//
