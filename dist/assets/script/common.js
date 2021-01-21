var Common = function () {
	var self = this;
	self.init = function () {
		console.log('init');
	}
	self.init();
}

var common = new Common();

var IndexController = function () {
	var self = this;

	self.init = function () {
		console.log('index');
	}
	self.init();
}
var idxCtl = new IndexController();
