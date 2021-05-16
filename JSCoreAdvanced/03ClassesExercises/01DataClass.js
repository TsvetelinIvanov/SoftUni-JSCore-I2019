class HTTPRequestData{
    constructor(method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let httpRequestData = new HTTPRequestData('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(httpRequestData)