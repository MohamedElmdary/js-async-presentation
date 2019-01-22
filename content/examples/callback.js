/**
 * @param {number} a 
 * @param {number} b 
 * @param {function(res: number)} cb 
 */

function asyncAdder(a, b, cb) {
    setTimeout(function () {
        cb(a + b);
    }, 500);
}

