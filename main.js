const https = require("https");
const fs = require("fs");
const mime = require("mime-types");
const sik = {};
sik.started = false;
sik.cfg = {
	port: 2498,
	ip: "0.0.0.0",
	resourceDir: "res",
	indexFile: "index.html",
	keyFile: "/etc/ssl/private/apache-selfsigned.key",
	certFile: "/etc/ssl/certs/apache-selfsigned.crt"
};
sik.path = fs.realpathSync(__dirname);


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
			cert; fs.readFileSync(sik.cfg.certFile)
		};
		sik.server = https.createServer(sslOpts, sik.handleRequest);
		sik.server.listen(sik.cfg.port, sik.cfg.ip);
		sik.started = true;
	}
};

sik.init = function init() {
	// ?
	console.log("Now starting https server");
	sik.start();
};

sik.init();