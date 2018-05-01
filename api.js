class API {
    constructor(port) {
        this.port = port
        this.isRunning = false
        const restify = require("restify")
        const errors = require("restify-errors")
        const restifyPlugins = require('restify').plugins
        this.server = restify.createServer({
            name: 'SIK'
        });
        this.server.use(restify.plugins.bodyParser({}))
    }
    isRunning() {
        return this.isRunning
    }
    start() {
        this.server.listen(this.port, () => {
            this.isRunning = true
        });
    }
}

module.exports = API;