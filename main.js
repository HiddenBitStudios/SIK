const https = require("https");
const fs = require("fs");
const API = require("./api.js")
const mime = require("mime-types");
let faceRec = (function(){
		try {
			return require("face-recognition");
		} catch(e) {
			console.log("Couldn't load face-recognition");
			return false;
		}
	})();
const sik = {};
sik.started = false;
sik.cfg = {
	ports: {
		https : 2498,
		api : 2499,
		ws : 2500
	},
	ip: "0.0.0.0",
	resourceDir: "res",
	indexFile: "index.html",
	keyFile: "privkey.pem",
	certFile: "cert.pem"
};
sik.path = fs.realpathSync(__dirname);
sik.api = new API(sik.cfg.ports.api);

sik.handleRequest = function handleRequest(req, res) {
	res.statusCode = 404;
	res.setHeader("X-Powered-By", "NodeJS");
	res.setHeader("X-Author", "HiddenBitStudios");
	res.setHeader("X-Application", "SIK");
	
	res.end("WIP");
};

sik.start = function start() {
	if (!sik.started) {
		let sslOpts = {
			key: fs.readFileSync(sik.cfg.keyFile),
			cert: fs.readFileSync(sik.cfg.certFile)
		};
		sik.server = https.createServer(sslOpts, sik.handleRequest);
		sik.server.listen(sik.cfg.ports.https, sik.cfg.ip);
		sik.started = true;
	}
};

sik.init = function init() {
	sik.start();
	console.log("HTTPS Server running on", sik.cfg.ports.https);
	sik.api.start();
	console.log("API Server running on", sik.cfg.ports.api);
};

sik.init();