handlers.registerGetHandler = function(context) {
    context.loggedIn = authService.isAuth();
    context.username = sessionStorage.getItem('username');
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        registerForm: './templates/register/registerForm.hbs'
    }).then(function() {
        this.partial('./templates/register/registerPage.hbs');
    });
};

handlers.registerPostHandler = function(context) {
    let username = context.params.username;
    let password = context.params.password;
    let repeatPassword = context.params.repeatPassword;
    if (password !== repeatPassword){
        notifications.showError('Passwords do not match!');
    }
    else {
        authService.register(username, password, context)
            .then(response => {
                authService.saveSession(response);
                notifications.showInfo('Registration Successfull.');
                context.redirect('#/home');
            })
            .catch(notifications.handleError);
    }
};

handlers.loginGetHandler = function(context) {
    context.loggedIn = authService.isAuth();
    context.username = sessionStorage.getItem('username');
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        loginForm: './templates/login/loginForm.hbs'
    }).then(function() {
        this.partial('./templates/login/loginPage.hbs');
    });
};

handlers.loginPostHandler = function(context) {
    let username = context.params.username;
    let password = context.params.password;
    authService.login(username, password)
        .then(response => {
            authService.saveSession(response);
            notifications.showInfo('Login successfull.');
            context.redirect('#/home');
        }).catch(notifications.handleError);
};

handlers.logoutHandler = function(context) {
    authService.logout()
        .then(() => {
            authService.clearSession();
            notifications.showInfo('Logout successfull.');
            context.redirect('#/home');
        }).catch(notifications.handleError);
};
