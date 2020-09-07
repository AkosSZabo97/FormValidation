$(function() {
    $("#basic-form").validate({
        rules: {
            fName: {
                required: true
            }, 
            lName: {
                required: true
            },
            message: {
                required: true
            }
        },
    });
    
});