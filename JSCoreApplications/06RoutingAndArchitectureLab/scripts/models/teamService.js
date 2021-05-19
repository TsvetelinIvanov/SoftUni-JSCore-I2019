// let teamsService = (() => {
//     function loadTeams() {
//         // Request teams from db
//         return requester.get('appdata', 'teams', 'kinvey');
//     }

//     function loadTeamDetails(teamId) {
//         return requester.get('appdata', 'teams/' + teamId, 'kinvey');
//     }

//     function edit(teamId, name, description) {
//         let teamData = {
//             name: name,
//             comment: description,
//             author: sessionStorage.getItem('username')
//         };

//         return requester.update('appdata', 'teams/' + teamId, 'kinvey', teamData);
//     }

//     function createTeam(name, comment) {
//         let teamData = {
//             name: name,
//             comment: comment
//         };

//         return requester.post('appdata', 'teams', 'kinvey', teamData);
//     }

//     function joinTeam(teamId) {
//         let userData = {
//             username: sessionStorage.getItem('username'),
//             teamId: teamId
//         };

//         return requester.update('user', sessionStorage.getItem('userId'), 'kinvey', userData);
//     }

//     function leaveTeam() {
//         let userData = {
//             username: sessionStorage.getItem('username'),
//             teamId: ''
//         };

//        return requester.update('user', sessionStorage.getItem('userId'), userData, 'kinvey');
//     }

//     return {
//         loadTeams,
//         loadTeamDetails,
//         edit,
//         createTeam,
//         joinTeam,
//         leaveTeam
//     }
// })()

let crudService = (() => {
    const appDataModule = 'appdata';
    const userModule = 'user';
    const auth = 'kinvey';
    const entity = 'teams/';

    function loadTeams() {
        return requestService.get(appDataModule, entity, auth);
    }

    function loadTeamDetails(teamId) {
        return requestService.get(appDataModule, entity + teamId, auth);
    }

    function loadTeamMembers(teamId) {
        let query = `?query={"teamId":"${teamId}"}`;
        return requestService.get(userModule, query, auth);
    }

    function editTeam(teamId, name, description) {
        let teamData = {
            name: name,
            comment: description
        };

        return requestService.update(appDataModule, entity + teamId, auth, teamData);
    }

    function createTeam(name, comment) {
        let teamData = {
            name: name,
            comment: comment
        };

        return requestService.post(appDataModule, entity, auth, teamData);
    }

    function joinTeam(teamId) {
        let userData = {
            username: sessionStorage.getItem('username'),
            teamId: teamId
        };

        return requestService.update(userModule, sessionStorage.getItem('userId'), auth, userData);
    }

    function leaveTeam() {
        let userData = {
            username: sessionStorage.getItem('username')
        };

        return requestService.update(userModule, sessionStorage.getItem('userId'), auth, userData);
    }

    return {
        loadTeams,
        loadTeamDetails,
        loadTeamMembers,
        editTeam,
        createTeam,
        joinTeam,
        leaveTeam
    };
})();