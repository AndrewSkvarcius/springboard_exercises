//   PART ONE
//#1 Dom is ready (party time)
$(document).ready(console.log('Let’s get ready to party with jQuery!'));

//#2 all images of an article tag the class of image-ceter
$('article img').addClass('image-cnter'); 

//#3 remove last p in article
let $articleItem = $('article p');
$articleItem.eq(5).remove(); 
//#4 set font size to be random pixel size
$('#title').css('font-size', Math.random() * 100)
//#5 add list item
$('li').append('<li> That cup has spots</li>');

//#6 Empty the aside and put a paragraph in it apologizing for the list’s existence
$('aside').empty().append('<p> That list was awful Sorry.</p>');

//#7 change the numbers in the three inputs on the bottom, the background color of the 
//body should change to match whatever the three values in the inputs are.
$(".form-control").on('keyup blur change', function() {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color", "rgb(" + red + "," + green + ", " + blue + ")")
});
//#8 remove img
$("img").on('click', function (e) {
    $(e.target).remove();
  });