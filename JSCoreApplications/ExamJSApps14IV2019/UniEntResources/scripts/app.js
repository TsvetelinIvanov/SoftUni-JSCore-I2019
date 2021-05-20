const handlers = {}

$(() => {
  const app = Sammy('#root', function () {
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

    // event routes
    this.get('#/createEvent', handlers.getCreateEvent);
    this.post('#/createEvent', handlers.createEvent);    
    this.get('#/details/:id', handlers.showDetails);
    this.get('#/edit/:id', handlers.getEditEvent);
    this.post('#/edit/:id', handlers.editEvent);
    this.get('#/delete/:id', handlers.deleteEvent);
    this.get('#/join/:id', handlers.joinEvent);
    this.get('#/profile', handlers.getProfile);
  });
  app.run('#/home');
});