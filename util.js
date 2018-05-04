let util = {};
util.cloneRecursive = function cloneRecursive(obj) {
	// var recurTable = {};
	var recurArrayOld = [];
	var recurArrayNew = [];
	var f;
	f = function(ov) {
		var nv = ov;
		var i = recurArrayOld.indexOf(ov);
		if (i >= 0) {
			nv = recurArrayNew[i];
		} else if (ov instanceof Array) {
			nv = Array.prototype.slice.apply(ov);
		} else if (typeof nv == "object") {
			nv = {};
			// recurTable[ov] = nv;
			for (var k in ov) {
				if (!ov.hasOwnProperty(k)) {
					continue;
				}
				var v = ov[k];
				nv[k] = f(v);
			}
		}
		// recurTable[ov] = nv;
		if (i === -1) {
			recurArrayOld.push(ov);
			recurArrayNew.push(nv);
		}
		return nv;
	};
	return f(obj);
};

module.exports = util;