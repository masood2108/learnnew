$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault(); 
        
        var form = $(this);
        var url = form.attr('action');
        var formData = form.serialize(); // Serialize form data

        $.ajax({
            type: 'POST',
            url: url,
            data: formData, // Use serialized form data
            dataType: 'json',
            success: function(data) {
                if (data.success) {
                    $('#message').text('Your message has been sent!').addClass('success').removeClass('error');
                    form.trigger('reset'); 
                } else {
                    $('#message').text('Message not sent. Please try again later.').addClass('error').removeClass('success');
                }
            },
            error: function() {
                $('#message').text('An error occurred. Please try again later.').addClass('error').removeClass('success');
            }
        });
    });
});
