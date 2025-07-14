let expect = require('chai').expect;
let FilmStudio = require('../02FilmStudio').FilmStudio;
//In Judge must be paste without this above
describe('SoftUniFy', function() {
    describe('constructor', function() {
        it('should have property name', function() {
            let filmStudio = new FilmStudio('Verginia');
            expect(filmStudio).to.haveOwnProperty('name');
        });
        it('should have correct property name', function() {
            let filmStudio = new FilmStudio('Verginia');
            expect(filmStudio.name).to.be.equal('Verginia');
        });
        it('should have property films', function() {
            let filmStudio = new FilmStudio();
            expect(filmStudio).to.haveOwnProperty('films');
        });
        it('should have property films empty array', function() {
            let filmStudio = new FilmStudio();
            expect(JSON.stringify(filmStudio.films)).to.be.equal('[]');
        });
        it('should have property films empty array', function() {
            let filmStudio = new FilmStudio();
            expect(filmStudio.films).to.be.eql([]);
        });
        it('should have property films empty array', function() {
            let filmStudio = new FilmStudio('Verginia');
            expect(JSON.stringify(filmStudio.films)).to.be.equal('[]');
        });
        it('should have property films empty array', function() {
            let filmStudio = new FilmStudio('Verginia');
            expect(filmStudio.films).to.be.eql([]);
        });
    });

    describe('makeMovie(filmName, roles)', function() {
        let filmStudio;
        beforeEach(function() {
            filmStudio = new FilmStudio('Verginia');
        });

        it('should throw by invalid arguments count', function() {
            expect(() => { filmStudio.makeMovie('Vanilla sky'); }).to.throw('Invalid arguments count');
        });
        it('should throw by invalid arguments count', function() {
            expect(() => {filmStudio.makeMovie('Vanilla sky', ['roles'], 'wrongArgument');}).to.throw('Invalid arguments count');
        });
        it('should throw by invalid argument filmName', function() {
            expect(() => {filmStudio.makeMovie(9, ['roles']);}).to.throw('Invalid arguments');
            expect(() => {filmStudio.makeMovie([], ['roles']);}).to.throw('Invalid arguments');
            expect(() => {filmStudio.makeMovie(true, ['roles']);}).to.throw('Invalid arguments');
        });
        it('should throw by invalid argument roles', function() {
            expect(() => {filmStudio.makeMovie('Vanilla sky', 'roles');}).to.throw('Invalid arguments');
            expect(() => {filmStudio.makeMovie('Vanilla sky', {'roles': 1}); }).to.throw('Invalid arguments');
            expect(() => {filmStudio.makeMovie('Vanilla sky', 1);}).to.throw('Invalid arguments');
        });

        it('should return corect value for one film ', function() {
            expect(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy'])).to.be.eql({
                filmName: 'The Avengers',
                filmRoles:
                    [{ role: 'Iron-Man', actor: false },
                    { role: 'Thor', actor: false },
                    { role: 'Hulk', actor: false },
                    { role: 'Arrow guy', actor: false }]
            });
        });
        it('should return corect value for one existing film ', function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man'])).to.be.eql({
                filmName: 'The Avengers 2',
                filmRoles:
                    [{ role: 'Iron-Man', actor: false },
                    { role: 'Hulk', actor: false },
                    { role: 'Arrow guy', actor: false },
                    { role: 'Ant-man', actor: false }]
            });
        });
        it('should return corect value for one new film by existing films', function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
            expect(filmStudio.makeMovie('The New Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther'])).to.be.eql({
                filmName: 'The New Avengers',
                filmRoles:
                    [{ role: 'Iron-Man', actor: false },
                    { role: 'Thor', actor: false },
                    { role: 'Hulk', actor: false },
                    { role: 'Arrow guy', actor: false },
                    { role: 'Black Panther', actor: false }]
            });
        });
    });

    describe('casting(actor, role)', function() {
        let filmStudio;
        beforeEach(function() {
            filmStudio = new FilmStudio('Verginia');
        });

        it('should return no success message for no films', function() {
            expect(filmStudio.casting('Leo De Caprio', 'detectiv')).to.be.equal(`There are no films yet in Verginia.`);
        });
        it('should return no success message for no roles', function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(filmStudio.casting('Leo De Caprio', 'detectiv')).to.be.equal(`Leo De Caprio, we cannot find a detectiv role...`);
        });
        
        it('should return success message for found role', function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(filmStudio.casting('Leo De Caprio', 'Thor')).to.be.equal(`You got the job! Mr. Leo De Caprio you are next Thor in the The Avengers. Congratz!`);
        });
    });

    describe('lookForProducer(film)', function() {
        let filmStudio;
        beforeEach(function() {
            filmStudio = new FilmStudio('Verginia');
        });

        it('should throw error for not found film', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(() => {filmStudio.lookForProducer('The Vilage');}).to.throw(`The Vilage has not exist yet, but we need the money...`);
        });
        
        it('should return correct found film', function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(filmStudio.lookForProducer('The Avengers')).to.be.equal('Film name: The Avengers\nCast:\nfalse as Iron-Man\nfalse as Thor\nfalse as Hulk\nfalse as Arrow guy\n');
        });
    });
});
