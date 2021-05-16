let expect = require('chai').expect;
let SoftUniFy = require('../02Softunify').SoftUniFy;
//In Judge must be paste without this above
describe('SoftUniFy', function(){
    describe('constructor', function(){
        it('should have property allSongs', function(){
            let softUniFy = new SoftUniFy();
            expect(softUniFy).to.haveOwnProperty('allSongs');
        });
        it('should have property allSongs empty object', function(){
            let softUniFy = new SoftUniFy();
            expect(JSON.stringify(softUniFy.allSongs)).to.be.equal('{}');
        });
        it('should have property allSongs empty object', function(){
            let softUniFy = new SoftUniFy();
            expect(softUniFy.allSongs).to.be.eql({});
        });
    });

    describe('downloadSong(artist, song, lyrics)', function(){
        let softUniFy;
        beforeEach(function(){
            softUniFy = new SoftUniFy();
        });

        it('should add one song to allSongs in correct format', function(){
            expect(softUniFy.downloadSong('Eminem', 'Venom', 'Knock, knock let...')).to.be.eql({
                'allSongs': {
                    'Eminem': {
                        'rate': 0,
                        'votes': 0,
                        'songs': ['Venom - Knock, knock let...']
                    }
                }
            });
        });
        it('should add more songs to allSongs in correct format', function(){
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, knock let...');
            softUniFy.downloadSong('Eminem', 'Fenomenal', 'I am fenomenal...');
            softUniFy.downloadSong('Dub Ex', 'Light Me On Fire', 'You can call me...');
            expect(softUniFy).to.be.eql({
                'allSongs': {
                    'Eminem': {
                        'rate': 0,
                        'votes': 0,
                        'songs': ['Venom - Knock, knock let...', 'Fenomenal - I am fenomenal...']
                    },
                    'Dub Ex': {
                        'rate': 0,
                        'votes': 0,
                        'songs': ['Light Me On Fire - You can call me...']
                    }
                }
            });
        });
    });

    describe('playSong', function(){
        let softUniFy;
        beforeEach(function(){
            softUniFy = new SoftUniFy();
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, knock let...');
            softUniFy.downloadSong('Eminem', 'Fenomenal', 'I am fenomenal...');
            softUniFy.downloadSong('Fiki', 'Fenomenal', 'I am fenomenal too...');
            softUniFy.downloadSong('Dub Ex', 'Light Me On Fire', 'You can call me...');
        });

        it('should return message when the song is not present', function(){
            softUniFy.playSong('Is this Love')
            expect(softUniFy.playSong('Is this Love')).to.be.equal(`You have not downloaded a Is this Love song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
        it('should return one song', function(){
            expect(softUniFy.playSong('Light Me On Fire')).to.be.equal('Dub Ex:\nLight Me On Fire - You can call me...\n');
        });
        it('should return more songs', function(){
            expect(softUniFy.playSong('Fenomenal')).to.be.equal('Eminem:\nFenomenal - I am fenomenal...\nFiki:\nFenomenal - I am fenomenal too...\n');
        });
    });

    describe('songsList', function(){
        it('should return message for empty allSongs', function(){
            let softUniFy = new SoftUniFy();
            expect(softUniFy.songsList).to.be.equal('Your song list is empty');
        });
        it('should return the songs from allSongs', function(){
            let softUniFy = new SoftUniFy();
            softUniFy.downloadSong('Eminem', 'Venom', 'Knock, knock let...');
            softUniFy.downloadSong('Eminem', 'Fenomenal', 'I am fenomenal...');
            softUniFy.downloadSong('Dub Ex', 'Light Me On Fire', 'You can call me...');
            expect(softUniFy.songsList).to.be.equal('Venom - Knock, knock let...\nFenomenal - I am fenomenal...\nLight Me On Fire - You can call me...');
        });
    });

    describe('rateArtist()', function(){
        it('should return message for unexisting in allSongs artist', function(){
            let softUniFy = new SoftUniFy();
            expect(softUniFy.rateArtist('Eminem', 50)).to.be.equal('The Eminem is not on your artist list.');
        });
        it('should return 0 rate for non ratted in allSongs artist', function(){
            let softUniFy = new SoftUniFy();
            softUniFy.downloadSong('Eminem', 'Fenomenal', 'I am fenomenal...');
            expect(softUniFy.rateArtist('Eminem')).to.be.equal(0);
        });
        it('should return correct rate for ratted in allSongs artist', function(){
            let softUniFy = new SoftUniFy();
            softUniFy.downloadSong('Eminem', 'Fenomenal', 'I am fenomenal...');
            expect(softUniFy.rateArtist('Eminem', 50)).to.be.equal(50);
        });
        it('should return correct rate for more times ratted in allSongs artist', function(){
            let softUniFy = new SoftUniFy();            
            softUniFy.downloadSong('Eminem', 'Fenomenal', 'I am fenomenal...');
            softUniFy.rateArtist('Eminem', 40);            
            expect(softUniFy.rateArtist('Eminem', 60)).to.be.equal(50);                    
        });
    });
});