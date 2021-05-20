handlers.getCreateEvent = function(context){
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/events/createEvent.hbs');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.createEvent = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let data = {...context.params, peopleInterestedIn: 0, organizer: context.username};
    if (data.name.length < 6){
        notifications.showError('The name of the event should be at least 6 characters long!');
        return;
    }

    if (!data.dateTime.match(/^[0-9]{1,2} [A-z][a-z]+( - [0-9]{1,2} (AM|PM))?$/)){
        notifications.showError('The date should be in format: "24 February" or "24 March - 10 PM"');
        return;
    }

    if (data.description.length < 10){
        notifications.showError('The description of the event should be at least 10 characters long!');
        return;
    }

    if (!data.imageURL.startsWith('http://') && !data.imageURL.startsWith('https://')) {
        notifications.showError('The URL of the image should starts with "http://" or "https://"');
        return;
    }

    eventService.createEvent(data).then(function() {
        notifications.showSuccess('Event created successfully.');
        context.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.showDetails = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    eventService.showEvent(id).then(function(response) {
        context.name = response.name;
        context.dateTime = response.dateTime;
        context.description = response.description;
        context.imageURL = response.imageURL;
        context.peopleInterestedIn = response.peopleInterestedIn;
        context.organizer = response.organizer;
        context.isCreator = response.organizer === context.username;
        context._id = response._id;
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function() {
            this.partial('./templates/events/details.hbs');
        }).catch(function(err) {
            notifications.handleError(err);
        });
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.getEditEvent = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    eventService.showEvent(id).then(function(response) {
        context.name = response.name;
        context.dateTime = response.dateTime;
        context.description = response.description;
        context.imageURL = response.imageURL;
        context.peopleInterestedIn = response.peopleInterestedIn;
        context.organizer = response.organizer;
        context.isCreator = response.organizer === context.username;
        context._id = response._id;
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function() {
            this.partial('./templates/events/editEvent.hbs');
        }).catch(function(err) {
            notifications.handleError(err);
        });
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.editEvent = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    let data = {...context.params};
    delete data.id;
    if (data.name.length < 6){
        notifications.showError('The name of the event should be at least 6 characters long!');
        return;
    }

    if (!data.dateTime.match(/^[0-9]{1,2} [A-z][a-z]+( - [0-9]{1,2} (AM|PM))?$/)){
        notifications.showError('The date should be in format: "24 February" or "24 March - 10 PM"');
        return;
    }

    if (data.description.length < 10){
        notifications.showError('The description of the event should be at least 10 characters long!');
        return;
    }

    if (!data.imageURL.startsWith('http://') && !data.imageURL.startsWith('https://')) {
        notifications.showError('The URL of the image should starts with "http://" or "https://"');
        return;
    }

    eventService.editEvent(id, data).then(function() {
        notifications.showSuccess('Event edited successfully.');
        context.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.deleteEvent = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    eventService.deleteEvent(id).then(function() {
        notifications.showSuccess('Event closed successfully.');
        context.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.joinEvent = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    eventService.showEvent(id).then(function(response) {
        let event = response;
        event.peopleInterestedIn = Number(event.peopleInterestedIn) + 1;
        eventService.editEvent(id, event).then(function() {
            notifications.showSuccess('You join the event successfully.');
            context.redirect('#/home');
        }).catch(function(err) {
            notifications.handleError(err);
        });
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.getProfile = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let username = context.username;
    eventService.showMyEvents(username).then(function(response) {
        context.countOfEvents = response.length;
        context.events =  response.sort((a, b) => Number(b.peopleInterestedIn) - Number(a.peopleInterestedIn));
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function() {
            this.partial('./templates/profile.hbs');
        }).catch(function(err) {
            notifications.handleError(err);
        })
    }).catch(function(error) {
        notifications.handleError(error);
    });
};