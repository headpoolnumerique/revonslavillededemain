const blur_elem = document.getElementById("blur-around");
document.onmousemove = (evt) => {
    blur_elem.style.transform = `translate(${evt.clientX}px, ${evt.clientY}px)`;
};


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



    $('.plus').on('click', function () {

        $('.moins').removeClass('moins');
        $(this).removeClass('plus');
        $(this).addClass('moins');
        $('.box-to-toggle').hide('fast');
        $(this).closest('.toggle-box').children('[class^="box-to-toggle"]').fadeToggle();
    });


    $('.moins').on('click', function () {

        alert('pif');

        $(this).removeClass('moins');
        $(this).addClass('plus');
        $('.box-to-toggle').hide('fast');
    });
});