function validateRequest(request) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /^[\w.]+$/;
    let messagePattern = /^[^<>\\&'"]*$/g;    

    let headerKeys = Object.keys(request);
    if (!headerKeys.includes('method') || !methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!headerKeys.includes('uri') || !uriPattern.test(request.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!headerKeys.includes('version') || !versions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!headerKeys.includes('message') || !messagePattern.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

console.log(validateRequest({method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: ''}));  

validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  });
  
  validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  });  
