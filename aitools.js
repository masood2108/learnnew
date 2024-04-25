$(document).ready(function() {
    $('.category-list ul li a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.tool-content').hide();
        $(target).show();
    });
});
