handlers.getDashboard = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let filter = context.params.category.slice(1);
    petService.getAllPets(filter).then(function(response) {
        let userId = sessionStorage.getItem('id');
        let pets = response;
        pets.forEach(pet => pet.isCreator = pet._acl.creator === userId);
        context.pets = pets;
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function() {
            this.partial('./templates/pet/dashboard.hbs');
        }).catch(function(err) {
            notifications.handleError(err);
        });
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.likePet = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    petService.getPetDetails(id).then(function(response) {
        let pet = response;
        let newLikes = Number(pet.likes) + 1;
        pet.likes = newLikes;
        petService.likePet(id, pet).then(function() {
            notifications.showInfo('Liked');
            context.redirect('#/dashboard');
        }).catch(function(err) {
            notifications.handleError(err);
        });
    }).catch(function(error) {
        notifications.handleError(error);
    })
};

handlers.getCreatePet = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/pet/createPet.hbs');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.createPet = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let data = {...context.params, likes: 0};
    if (data.name === '' || data.description === "") {
        notifications.showError('All fields should be non-empty!');
        
        return;        
    }

    if (!data.imageURL.startsWith('http')) {
        notifications.showError('Image URL should start with "http"!');
        
        return;
    }

    petService.createPet(data).then(function() {
        notifications.showInfo('Pet created.');
        context.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.getMyPets = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let userId = sessionStorage.getItem('id');
    petService.getMyPets(userId).then(function(response) {
        context.myPets = response;
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function() {
            this.partial('./templates/pet/myPets.hbs');
        }).catch(function(err){
            notifications.handleError(err);
        });
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.deletePet = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    petService.deletePet(id).then(function() {
        notifications.showInfo('Pet removed successfully!');
        context.redirect('#/home');
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.getPetDetails = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    petService.getPetDetails(id).then(function(response) {
        let userId = sessionStorage.getItem('id');
        context.name = response.name;
        context.description = response.description;
        context.imageURL = response.imageURL;
        context.likes = response.likes;
        context.isCreator = response._acl.creator === userId;
        context.id = id;
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function() {
            this.partial('./templates/pet/details.hbs');
        }).catch(function(err) {
            notifications.handleError(err);
        });
    }).catch(function(error) {
        notifications.handleError(error);
    });
};

handlers.editPetInfo = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    let id = context.params.id;
    petService.getPetDetails(id).then(function(response) {
        let data = {...response};
        data.description = context.params.description;
        petService.editPet(id, data).then(function() {
            notifications.showInfo('Updated successfully!');
            context.redirect('#/dashboard');
        }).catch(function(err) {
            notifications.handleError(err);
        });
    }).catch(function(error) {
        notifications.handleError(error);
    });
};
