'use strict';

(function (module) {
    var createView = {};
    createView.init = function(ctx, next) {
        $("form").trigger("reset"); 
        $('#create-user').show();
        $('#upload').hide();
        $('#profile').hide();
        $('#login').hide();
        $('#us-view').hide();
        $('#delete-user').hide();
        $('#update-user-form').hide();



        $('#create-user').on('submit', function(e) {
            e.preventDefault();
            let data = {
            name: e.target.name.value,
            email: e.target.email.value,
            username: e.target.username.value
            };
            ctx.newuser = data;
            console.log('data from form', ctx.newuser);
            next();
        });
    }
    module.createView = createView;
})(window);
