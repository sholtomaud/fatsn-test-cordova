var fastn = require('./fastn');

var basic = fastn('div',
	fastn('div',{'class':'company'},'fastn cordova-crosswalk example working in Android 4.1'), 
	fastn('h2','Some other text')
);

module.exports = function(){
	return basic;
};




