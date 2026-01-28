handlers.getRegister = function(ctx) {
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/register.hbs');
    }).catch(function(error) {
        notifications.handleError(error);
    });
}

handlers.getLogin = function(ctx) {
    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/login.hbs');
    }).catch(function(err) {
        notifications.handleError(err);
    });
}

handlers.registerUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;  
    if (username.length < 3) {
        notifications.showError('Username must be at least 3 symbols!');
      
        return;
    }

    if (password.length < 6) {
        notifications.showError('Password must be at least 6 symbols!');
      
        return;
    }

    userService.register(username, password).then((res) => {
        userService.saveSession(res);
        notifications.showInfo('User registered successfully.');
        ctx.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
}

handlers.loginUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    if (username.length < 3) {
        notifications.showError('Username must be at least 3 symbols!');
      
        return;
    }

    if (password.length < 6) {
        notifications.showError('Password must be at least 6 symbols!');
      
        return;
    }

    userService.login(username, password).then((res) => {
        userService.saveSession(res);
        notifications.showInfo('Login successful.');
        ctx.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
}

handlers.logoutUser = function(ctx) {
    userService.logout().then(() => {
        sessionStorage.clear();
        notifications.showInfo('Logout successful.');
        ctx.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
}
