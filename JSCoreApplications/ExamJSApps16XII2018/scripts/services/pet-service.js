const petService = (() => {
    function getAllPets(filter) {
        let query = filter && filter != 'All' ? JSON.stringify({category:filter}) : JSON.stringify({});
        return kinvey.get('appdata', `pets?query=${query}&sort={"likes": -1}`, 'kinvey');
    }

    function likePet(id, petData) {
        return kinvey.update('appdata', `pets/${id}`, 'kinvey', petData);
    }

    function createPet(petData) {
        return kinvey.post('appdata', 'pets', 'kinvey', petData);
    }

    function getMyPets(id) {
        return kinvey.get('appdata', `pets?query={"_acl.creator":"${id}"}`, 'kinvey');
    }

    function deletePet(id) {
        return kinvey.remove('appdata', `pets/${id}`, 'kinvey');
    }

    function getPetDetails(id) {
        return kinvey.get('appdata', `pets/${id}`, 'kinvey');
    }

    function editPet(id, petData) {
        return kinvey.update('appdata', `pets/${id}`, 'kinvey', petData);
    }

    return {
        getAllPets,
        likePet,
        createPet,
        getMyPets,
        deletePet,
        getPetDetails,
        editPet
    };
})();