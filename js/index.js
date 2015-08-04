require('fastclick');
var fastn = require('./fastn');
var crel = require('crel');

var app = fastn('div',
	require('./hello')()
);

window.onload = function(){
	app.render();

	crel(document.body,
		app.element
	);
};
