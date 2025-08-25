// let auth = (() => {
//     function saveSession(userInfo) {
//         let userAuth = userInfo._kmd.authtoken;
//         sessionStorage.setItem('authtoken', userAuth);
//         let userId = userInfo._id;
//         sessionStorage.setItem('userId', userId);
//         let username = userInfo.username;
//         sessionStorage.setItem('username', username);
//         sessionStorage.setItem('teamId', userInfo.teamId);
//     }

//     // user/login
//     function login(username, password) {
//         let userData = {
//             username,
//             password
//         };

//         return requester.post('user', 'login', 'basic', userData);
//     }

//     // user/register
//     function register(username, password, repeatPassword) {
//         let userData = {
//             username,
//             password
//         };

//         return requester.post('user', '', 'basic', userData);
//     }

//     // user/logout
//     function logout() {
//         let logoutData = {
//             authtoken: sessionStorage.getItem('authtoken')
//         };

//         return requester.post('user', '_logout', 'kinvey', logoutData);
//     }

//     function handleError(reason) {
//         showError(reason.responseJSON.description);
//     }

//     function showInfo(message) {
//         let infoBox = $('#infoBox');
//         infoBox.text(message);
//         infoBox.show();
//         setTimeout(() => infoBox.fadeOut(), 3000);
//     }

//     function showError(message) {
//         let errorBox = $('#errorBox');
//         errorBox.text(message);
//         errorBox.show();
//         setTimeout(() => errorBox.fadeOut(), 3000);
//     }

//     return {
//         login,
//         register,
//         logout,
//         saveSession,
//         showInfo,
//         showError,
//         handleError
//     }
// })()

let authService = (() => {
    const module = 'user';
    const basicAuth = 'basic';
    const kinveyAuth = 'kinvey';
    const loginConst = 'login';
    const logoutConst = '_logout';

    function isAuth() {
        return sessionStorage.getItem('authToken') !== null;
    }

    function hasTeam() {
        return sessionStorage.getItem('teamId') !== null;
    }

    function getUserId() {
        return sessionStorage.getItem('userId');
    }

    function saveSession(res) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authToken', res._kmd.authtoken);
        sessionStorage.setItem('userId', res._id);
        if (res.teamId !== undefined) {
            sessionStorage.setItem('teamId', res.teamId);
        }
    }

    function clearSession() {
        sessionStorage.clear();
    }

    function register(username, password) {
        let body = {username: username, password: password};
        
        return requestService.post(module, '', basicAuth, body);
    }

    function login(username, password) {
        let body = {username: username, password: password};
        
        return requestService.post(module, loginConst, basicAuth, body);
    }

    function logout() {
        return requestService.post(module, logoutConst, kinveyAuth, {});
    }

    return {
        isAuth,
        hasTeam,
        getUserId,
        saveSession,
        clearSession,
        register,
        login,
        logout
    };
})();
