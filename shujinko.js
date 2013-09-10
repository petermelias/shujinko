function Shujinko() {
	var args = Array.prototype.slice.call(arguments),
		callback = args.pop(),
		modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
		i;

	if (!(this instanceof Shujinko)) {
		return new Shujinko(modules, callback);
	}

	if (!modules || modules === '*') {
		modules = [];
		for (i in Shujinko.modules) {
			if (Shujinko.modules.hasOwnProperty(i)) {
				modules.push(i);
			}
		}
	}

	for (i = 0; i < modules.length; i += 1) {
		Shujinko.modules[modules[i]](this);
	}
	callback(this)
}

Shujinko.prototype = {
	name: 'Shujinko',
	version: '0.0.1',
	getName: function() {
		return this.name;
	}
}

Shujinko.modules = {}