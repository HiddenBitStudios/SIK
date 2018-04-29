class API {
    constructor(port, creds) {
        if(typeof creds != "object" || !creds.user || !creds.pass) {
            console.warn("The given Credentials are not complete")
        } else {
            this.pass = creds.pass
            this.user = creds.user
        }
        this.port = port
    }
    
}