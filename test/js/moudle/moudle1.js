/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-07 23:42:41
 * @version $Id$
 */
define(['./moudle2'],function(moudle2){
	var math = function(a,b){
        alert(moudle2.add(a,b));
	};
	return {
        math:math
	};
});
