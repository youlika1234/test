/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-14 21:40:53
 * @version $Id$
 */

/**
 * 基础运动框架(单方向运动)
 * @param  {[number]} obj [运动的对象]
 * @param {[number]} target [运动的终点目标]
 */
function doMove(obj, target) {
    clearInterval(timer);
    var speed = 10;
    timer = setInterval(function() {
            if (obj.offsetLeft >= target) {
                clearInterval(timer);
            } else {
                obj.style.left = obj.offsetLeft + speed + 'px';
            }
    },30);
   } 