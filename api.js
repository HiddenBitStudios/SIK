class API {
    constructor() {
        const restify = require("restify")
        const errors = require("restify-errors")
        const restifyPlugins = require('restify').plugins
        this.port = 2499;
        this.server = restify.createServer({
            name: 'SIK'
        });
        this.server.use(restify.plugins.bodyParser({}))
        this.server.listen(this.port, () => {
            console.log("API running on", this.port)
        });
    }
}

module.exports = API;