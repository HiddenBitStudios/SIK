const util = require("./util.js");
class API {
	constructor(options) {
		let opts = util.cloneRecursive(API.defaultOptions);
		Object.assign(opts, options);
		this.port = opts.port;
		this._isRunning = false;
		const restify = require("restify");
		const errors = require("restify-errors");
		const restifyPlugins = require('restify').plugins;
		this.server = restify.createServer({
			name: 'SIK'
		});
		this.server.use(restify.plugins.bodyParser({}));
		this.createRoutes();
	}
	isRunning() {
		return this._isRunning;
	}
	start() {
		this.server.listen(this.port, () => {
			this._isRunning = true;
		});
	}
	createRoutes() {
		this.server.pre((req, res, next) => {
			console.info(`${req.method} - ${req.url}`);
			return next();
		});
		this.server.get("/api/info", (req, res, next) => {
			res.send(200,"hey");
			return next();
		});
	}
}
API.defaultOptions = {
	port: 2498,
	sql: {
		host: "localhost",
		port: 3306,
		user: "",
		pass: ""
	}
};

module.exports = API;