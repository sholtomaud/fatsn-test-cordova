require('fastclick');
var fastn = require('./fastn');
var crel = require('crel');

var app = fastn('div',
	require('./stuff')()
);


// window.onload = function(){
// 	app.render();

// 	crel(document.body,
// 		app.element
// 	);
// };

window.onerror = function(error){
	alert(error.message);
}