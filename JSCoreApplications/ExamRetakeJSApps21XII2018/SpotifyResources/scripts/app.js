const handlers = {}

$(() => {
    const app = Sammy('#container', function() {
        this.use('Handlebars', 'hbs');
      
        // home page routes
        this.get('/index.html', handlers.getHome);
        this.get('/', handlers.getHome);
        this.get('#/home', handlers.getHome);

        // user routes
        this.get('#/register', handlers.getRegister);
        this.get('#/login', handlers.getLogin);
        this.post('#/register', handlers.registerUser);
        this.post('#/login', handlers.loginUser);
        this.get('#/logout', handlers.logoutUser);

        // songs
        this.get('#/allSongs', handlers.getAllSongs);
        this.get('#/createSong', handlers.getCreateSong);
        this.post('#/createSong', handlers.createSong);
        this.get('#/like/:id', handlers.likeSong);
        this.get('#/remove/:id', handlers.removeSong);    
        this.get('#/listen/:id', handlers.listenSong);
        this.get('#/mySongs', handlers.getMySongs);
    });
  
    app.run('#/home');
});
