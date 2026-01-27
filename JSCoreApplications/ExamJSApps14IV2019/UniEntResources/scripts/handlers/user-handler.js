handlers.getRegister = function(context) {
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/register.hbs');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.registerUser = function(context) {
    let username = context.params.username;
    let password = context.params.password;
    let repeatPassword = context.params.rePassword;
    if (username.length < 3) {
        notifications.showError('The username must be at least 3 characters long!');
      
        return;
    }
  
    if (password.length < 6) {
        notifications.showError('The password must be at least 6 characters long!');
      
        return;
    }
  
    if (repeatPassword !== password) {
        notifications.showError('Passwords must match!');
      
        return;
    }
  
    userService.register(username, password).then((response) => {
        userService.saveSession(response);
        notifications.showSuccess('User registration successful.');
        context.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
}

handlers.getLogin = function(context) {
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/login.hbs');
    }).catch(function(error) {
        notifications.handleError(error);
    });
}

handlers.loginUser = function(context) {
    let username = context.params.username;
    let password = context.params.password;
    if (!username || !password) {
        notifications.showError('Wrong username or password!');
      
        return;
    }
  
    userService.login(username, password).then((response) => {
        userService.saveSession(response);
        notifications.showSuccess('Login successful.');
        context.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
}

handlers.logoutUser = function(context) {
    userService.logout().then(() => {
        sessionStorage.clear();
        notifications.showSuccess('Logout successful.');
        context.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};
