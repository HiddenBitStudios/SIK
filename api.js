class API {
    constructor() {
        const restify = require("restify")
        const restifyPlugins = require('restify').plugins
        this.server = restify.createServer({
            name: 'SIK'
        });
        this.server.use(restify.plugins.bodyParser({}))
    }
}