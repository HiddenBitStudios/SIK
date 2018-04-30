class API {
    constructor() {
        const restify = require("restify")
        const errors = requrie("restify-errors")
        const restifyPlugins = require('restify').plugins
        this.port = 2499;
        this.server = restify.createServer({
            name: 'SIK'
        });
        this.server.use(restify.plugins.bodyParser({}))
        this.server.listen(port, () => {
            console.log("API running on", port)
        });
    }
}