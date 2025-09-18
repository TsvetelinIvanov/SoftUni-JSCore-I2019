handlers.getAllSongs = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    songService.getAllSongs().then(function(response) {
        let userId = sessionStorage.getItem('id');
        let songs = response;
        songs.forEach(song => song.isCreator = song._acl.creator === userId);
        songs = songs.sort((a, b) => a.isCreator - b.isCreator);
        context.songs = songs;
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            song: './templates/song/song.hbs'
        }).then(function() {
            this.partial('./templates/song/allSongs.hbs');
        }).catch(function(err) {
            notify.handleError(err);
        });
    }).catch(function(error) {
        notify.handleError(error);
    });
};

handlers.getCreateSong = function(context) {
    context.isAuth = userService.isAuth();
    context.userService = sessionStorage.getItem('username');
    context.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function() {
        this.partial('./templates/song/createSong.hbs');
    }).catch(function(error) {
        notify.handleError(error);
    });
};

handlers.createSong = function(context) {
    let data = {...context.params, likeCounter: 0, listenCounter: 0};
    if (data.title.length < 6) {
        notify.showError('The title should be at least 6 characters long!');
        
        return;
    }

    if (data.artist.length < 3) {
        notify.showError('The artist should be at least 3 characters long!');
        
        return;
    }

    if (!data.imageURL.startsWith('http://') && !data.imageURL.startsWith('https://')) {
        notify.showError('The image URL should start with "http://" or "https//"');
        
        return;
    }

    songService.createSong(data).then(function(response) {
        notify.showInfo('Song created successfully!');
        context.redirect('#/allSongs');
    }).catch(function(error) {
        notify.handleError(error);
    });
};

handlers.likeSong = function(context) {
    let id = context.params.id;
    songService.getASong(id).then(function(response) {
        let song = response;
        let newLikeCounter = Number(song.likeCounter) + 1;
        song.likeCounter = newLikeCounter;
        songService.likeSong(id, song).then(function() {
            notify.showInfo('Liked');
            context.redirect('#/allSongs');
        }).catch(function(err) {
            notify.handleError(err);
        });
    }).catch(function(error) {
        notify.handleError(error);
    });
};

handlers.listenSong = function(context) {
    let id = context.params.id;
    songService.getASong(id).then(function(response) {
        let song = response;
        let newListenCounter = Number(song.listenCounter) + 1;
        song.listenCounter = newListenCounter;
        songService.listenSong(id, song).then(function() {
            notify.showInfo(`You just litened ${song.title}`);
            context.redirect('#/allSongs');
        }).catch(function(err) {
            notify.handleError(err);
        });
    }).catch(function(error) {
        notify.handleError(error);
    })
};

handlers.removeSong = function(context) {
    let id = context.params.id;
    songService.removeSong(id).then(function() {
        notify.showInfo('Song removed successfully!');
        context.redirect('#/allSongs');
    }).catch(function(error) {
        notify.handleError(error);
    });
};

handlers.getMySongs = function(context) {
    context.isAuth = userService.isAuth();
    context.username = sessionStorage.getItem('username');
    songService.getAllMySongs().then(function(response) {
        let userId = sessionStorage.getItem('id');
        let songs = response;
        songs.forEach(song => song.isCreator = song._acl.creator === userId);
        context.songs = songs;
        context.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            song: './templates/song/song.hbs'
        }).then(function() {
            this.partial('./templates/song/mySongs.hbs');
        }).catch(function(err) {
            notify.handleError(err);
        });
    }).catch(function(error) {
        notify.handleError(error);
    });
};
