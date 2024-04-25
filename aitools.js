$(document).ready(function() {
    $('.category-list ul li a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.tool-content').hide();
        $(target).show();
    });
});
// Smooth scrolling for anchor links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
