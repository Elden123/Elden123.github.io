function scrollToTwo() {
    $.fn.fullpage.moveTo(2);
}

function scrollToThree() {
    $.fn.fullpage.moveTo(3);
}

function scrollToFour() {
    $.fn.fullpage.moveTo(4);
}

function typeForward(elementClass, typingSpeed, textToAdd) {

    var thisClass = $(elementClass);
    thisClass = thisClass.find(".text-js");

    var oldText = thisClass.text();
    textToAdd = textToAdd.trim().split('');
    var text = oldText;

    var numOfChars = textToAdd.length;

    thisClass.text(oldText);

    thisClass.css("opacity",1);
    thisClass.prev().removeAttr("style");
    thisClass.text(oldText);

    for(var i = 0; i < numOfChars; i++) {

        (function(i,char){

            setTimeout(function() {

                text += char;
                thisClass.text(text);

            }, i*typingSpeed);

        }) (i+1,textToAdd[i]);

    }

}

function typeBackward(elementClass, typingSpeed, numOfCharsToDelete) {

    var thisClass = $(elementClass);
    thisClass = thisClass.find(".text-js");
    var text = thisClass.text();

    for(var i = 0; i < numOfCharsToDelete; i++){

        (function(i){

            setTimeout(function() {

                text = text.substring(0, text.length - 1);
                thisClass.text(text);

            },i*typingSpeed);

        })(i+1);

    }

}

$(document).ready(function() {

    $('#fullpage').fullpage();

    var thisClass = $(".type-js");
    thisClass.css({
        "position": "relative",
        "display": "inline-block"
    });
    thisClass.prepend('<div class="cursor" style="right: initial; right:0;"></div>');

    setTimeout(function() {
        typeBackward(".type-js", 100, 7);
    }, 2000);

    setTimeout(function() {
        typeForward(".type-js", 100, "a developer.");
    }, 4000);

    setTimeout(function() {
        typeBackward(".type-js", 100, 12);
    }, 6500);

    setTimeout(function() {
        typeForward(".type-js", 100, "an entrepreneur.");
    }, 8500);

    setTimeout(function() {
        typeBackward(".type-js", 100, 16);
    }, 11000);

    setTimeout(function() {
        typeForward(".type-js", 100, "a designer.");
    }, 13500);

    setTimeout(function() {
        typeBackward(".type-js", 100, 11);
    }, 15500);

    setTimeout(function() {
        typeForward(".type-js", 100, "Nolan.");
    }, 18000);

});
