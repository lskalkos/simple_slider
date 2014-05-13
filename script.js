$(document).ready(function ($) {
    
    $('#buttonplay').click(function(){
        sliderInit = setInterval(moveRight, 3000);
    }); //when user clicks "Play Slider" button, slider will start moving automatically

    $('#buttonstop').click(function(){
        clearInterval(sliderInit);
    }); //when user clicks "Stop Slider" button, slider will stop
    
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;//variables to determine slider width and height
    
    $('#slider').css({ width: slideWidth, height: slideHeight }); 
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 400, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };//moves slider left through slider window

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 400, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };//moves slider right through slider window

    $('a.control_prev').click(function () {
        moveLeft();
    });//manual control to move slides left

    $('a.control_next').click(function () {
        moveRight();
    });//manual control to move slides right

});    


