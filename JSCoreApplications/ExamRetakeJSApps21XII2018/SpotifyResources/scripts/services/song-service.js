const songService = (() => {
    function getAllSongs() {
        return kinvey.get('appdata', 'songs', 'kinvey', `?query={}&sort={"likeCounter": -1, "listenCounter": -1}`);
    }    

    function createSong(data) {
        return kinvey.post('appdata', 'songs', 'kinvey', data)
    }

    function getASong(id) {
        kinvey.get('appdata', `songs/${id}`, 'kinvey');
    }

    function likeSong(id, song) {
        kinvey.update('appdata', `songs/${id}`, 'kinvey', song);
    }

    function listenSong(id, song) {
        kinvey.update('appdata', `songs/${id}`, 'kinvey', song);
    }

    function removeSong(id) {
        kinvey.remove('appdata', `songs/${id}`, 'kinvey');
    }
    
    function getAllMySongs() {
        return kinvey.get('appdata', 'songs', 'kinvey', `?query={"_acl.creator":"${sessionStorage.getItem('id')}"}&sort={"likeCounter": -1, "listenCounter": -1}`);
    }

    return {
        getAllSongs,        
        createSong,
        getASong,
        likeSong,
        listenSong,
        removeSong,
        getAllMySongs
    };
})();
