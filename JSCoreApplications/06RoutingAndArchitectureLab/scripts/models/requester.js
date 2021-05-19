// let requester = (() => {
//     const kinveyBaseUrl = "https://baas.kinvey.com/";
//     const kinveyAppKey = "kid_ry7IR9WMe";
//     const kinveyAppSecret = "095bdc1164c24d9d865cfad4086e4357";

//     // Creates the authentication header
//     function makeAuth(type) {
//         return type === 'basic'
//             ?  'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
//             :  'Kinvey ' + sessionStorage.getItem('authtoken');
//     }

//     // Creates request object to kinvey
//     function makeRequest(method, module, endpoint, auth) {
//         return req = {
//             method,
//             url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
//             headers: {
//                 'Authorization': makeAuth(auth)
//             }
//         };
//     }

//     // Function to return GET promise
//     function get (module, endpoint, auth) {
//         return $.ajax(makeRequest('GET', module, endpoint, auth));
//     }

//     // Function to return POST promise
//     function post (module, endpoint, auth, data) {
//         let req = makeRequest('POST', module, endpoint, auth);
//         req.data = data;
//         return $.ajax(req);
//     }

//     // Function to return PUT promise
//     function update (module, endpoint, auth, data) {
//         let req = makeRequest('PUT', module, endpoint, auth);
//         req.data = data;
//         return $.ajax(req);
//     }

//     // Function to return DELETE promise
//     function remove (module, endpoint, auth) {
//         return $.ajax(makeRequest('DELETE', module, endpoint, auth));
//     }

//     return {
//         get,
//         post,
//         update,
//         remove
//     }
// })()

let requestService = (() => {
    const appKey = 'kid_ry7IR9WMe';
    const appSecret = '095bdc1164c24d9d865cfad4086e4357';
    const baseUrl = 'https://baas.kinvey.com';

    function getBasicAuth() {
        return {'Authorization': "Basic " + btoa(appKey + ":" + appSecret)};
    }

    function getKinveyAuth() {
        return {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};
    }

    function constructRequest(method, module, endpoint, auth) {
        return {
            method: method,
            url: `${baseUrl}/${module}/${appKey}/${endpoint}`,
            headers: auth === 'basic' ? getBasicAuth() : getKinveyAuth()
        };
    }

    function get(module, endpoint, auth) {
        return $.ajax(constructRequest('GET', module, endpoint, auth));
    }

    function post(module, endpoint, auth, body) {
        let request = constructRequest('POST', module, endpoint, auth);
        request.contentType = 'application/json';
        request.data = JSON.stringify(body);
        return $.ajax(request);
    }

    function update(module, endpoint, auth, body) {
        let request = constructRequest('PUT', module, endpoint, auth);
        request.contentType = 'application/json';
        request.data = JSON.stringify(body);
        return $.ajax(request);
    }

    function remove(module, endpoint, auth) {
        return $.ajax(constructRequest('DELETE', module, endpoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    };
})();
