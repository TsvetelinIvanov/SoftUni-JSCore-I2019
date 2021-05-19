// $(() => {
//     const app = Sammy('#main', function () {
//         this.use('Handlebars', 'hbs');

//         this.get('#/home', function(){
//             this.loggedIn = !!sessionStorage.getItem('authtoken');
//             this.username = sessionStorage.getItem('username');
//             this.loadPartials({
//                 header: './templates/common/header.hbs',
//                 footer: './templates/common/footer.hbs'
//             }).then(function() {
//                 this.partial('./templates/home/home.hbs');
//             });            
//         });

//         this.get('#/about', function(){
//             this.loadPartials({
//                 header: './templates/common/header.hbs',
//                 footer: './templates/common/footer.hbs'
//             }).then(function() {
//                 this.partial('./templates/about/about.hbs');
//             });            
//         });

//         this.get('#/login', function(){
//             this.loadPartials({
//                 header: './templates/common/header.hbs',
//                 footer: './templates/common/footer.hbs',
//                 loginForm: './templates/login/loginForm.hbs'
//             }).then(function() {
//                 this.partial('./templates/login/loginPage.hbs');
//             });            
//         });

//         this.get('#/logout', async function() {
//             let result = await auth.logout();
//             sessionStorage.clear();
//             auth.showInfo('You are logged out successfully!');
//             this.redirect('#/home');
//         });

//         this.get('#/register', function(){
//             this.loadPartials({
//                 header: './templates/common/header.hbs',
//                 footer: './templates/common/footer.hbs',
//                 registerForm: './templates/register/registerForm.hbs'
//             }).then(function() {
//                 this.partial('./templates/register/registerPage.hbs');
//             });            
//         });

//         this.post('#/register', function(context){
//             let that = this;
//             let {username, password, repeatPassword} = context.params;
//             auth.register(username, password, repeatPassword)
//                 .then(function(res) {
//                     auth.saveSession(res);
//                     auth.showInfo('You are registered successfully!');
//                     that.redirect('#/home');
//                 });           
//         });
//     });

//     app.run('#/home');
// });

const handlers = {};
$(() => {
    const app = Sammy('#main', function() {
        this.use('Handlebars', 'hbs');
        this.get('#/index.html', handlers.homeHandler);
        this.get('#/home', handlers.homeHandler);
        this.get('#/about', handlers.aboutHandler);
        this.get('#/register', handlers.registerGetHandler);
        this.post('#/register', handlers.registerPostHandler);
        this.get('#/login', handlers.loginGetHandler);
        this.post('#/login', handlers.loginPostHandler);
        this.get('#/logout', handlers.logoutHandler);
        this.get('#/catalog', handlers.listTeamsHandler);
        this.get('#/catalog/:teamId', handlers.teamDetailsHandler);
        this.get('#/create', handlers.createTeamGetHandler);
        this.post('#/create', handlers.createTeamPostHandler);
        this.get('#/edit/:teamId', handlers.editTeamGetHandler);
        this.post('#/edit/:teamId', handlers.editTeamPostHandler);
        this.get('#/join/:teamId', handlers.joinTeamHandler);
        this.get('#/leave', handlers.leaveTeamHandler);
    });

    app.run('#/home');
});
