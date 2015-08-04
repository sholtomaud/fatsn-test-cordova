var fastn = require('./fastn');

var working = fastn('div',
	fastn('div','Some Company'), 
	fastn('h2','Some other Company')
);

var notWorking = fastn('div',
	fastn('div',{'class':'company'},'Some Company'), 
	fastn('h2','Some other Company')
);

module.exports = function(){
	return working;
};




