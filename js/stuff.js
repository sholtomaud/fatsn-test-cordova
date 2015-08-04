var fastn = require('./fastn');

var basic = fastn('div',
	fastn('div','Works, but not with {class:"some-class"} in Android 4.1'), 
	fastn('h2','Some other text')
);

var basicWithCrosswalk = fastn('div',
	fastn('div',{'class':'company'},'Crosswalk example working in Android 4.1'), 
	fastn('h2','Some other text')
);

module.exports = function(){
	return basicWithCrosswalk;
};




