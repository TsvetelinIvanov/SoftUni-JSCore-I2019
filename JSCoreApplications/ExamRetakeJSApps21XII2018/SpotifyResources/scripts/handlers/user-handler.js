handlers.getRegister = function(context) {
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/register.hbs');
    }).catch(function(error) {
        notify.handleError(error);
    });
}

handlers.getLogin = function(context) {
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/login.hbs');
    }).catch(function (error) {
        notify.handleError(error);
    });
}

handlers.registerUser = function(context) {
    let username = context.params.username;
    let password = context.params.password;
    if (username.length < 3) {
        notify.showError('Username should be at least 3 character long.');
        
        return;
    }

    if (password.length < 6) {
        notify.showError('Password should be at least 6 character long.');
        
        return;
    }

    userService.register(username, password).then((response) => {
        userService.saveSession(response);
        notify.showInfo('User registration successful.');
        context.redirect('#/home');
    }).catch(function(error) {
        notify.handleError(error);
    });
}

handlers.loginUser = function(context) {
    let username = context.params.username;
    let password = context.params.password;
    userService.login(username, password).then((response) => {
        userService.saveSession(response);
        notify.showInfo('Login successful.');
        context.redirect('#/home');
    }).catch(function(error) {
        notify.handleError(error);
    });
}

handlers.logoutUser = function(context) {
    userService.logout().then(() => {
        sessionStorage.clear();
        notify.showInfo('Logout successful.');
        context.redirect('#/home');
    })
}
