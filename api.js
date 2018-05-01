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
        this.createRoutes()
    }
    isRunning() {
        return this.isRunning
    }
    start() {
        this.server.listen(this.port, () => {
            this.isRunning = true
        });
    }
    createRoutes() {
        this.server.pre((req, res, next) => {
            console.info(`${req.method} - ${req.url}`)
            return next()
        })
        this.server.get("/api/info", (req, res, next) => {
            res.send(200,"hey")
            return next()
        })
    }
}

module.exports = API;