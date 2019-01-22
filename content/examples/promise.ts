declare var console: any;
import { asyncAdder } from './asyncAdder';

let r;

(<Promise<number>>asyncAdder(1, 2))
    .then(function (res) {
        r = res;
        console.log("result from inside: ", r);
    });

console.log("result from outside: ", r);
