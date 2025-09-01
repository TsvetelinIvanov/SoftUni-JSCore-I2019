handlers.getHome = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    if (context.isAuth){
        eventService.showEvents().then(function(response) {
            context.events = response;
            context.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function() {
                this.partial('./templates/home.hbs');
            }).catch(function(err) {
                notifications.handleError(err);
            });
        }).catch(function(error) {
            notifications.handleError(error);
        });
    }
    else {
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function() {
            this.partial('./templates/home.hbs');
        }).catch(function (error) {
            notifications.handleError(error);
        });
    }
};
