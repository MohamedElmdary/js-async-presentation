declare var console: any;
import { asyncAdder } from './asyncAdder';

let r;

(async function () {
    const res = await <Promise<number>>asyncAdder(1, 2);
    r = res;
    console.log("result from inside: ", r);
})();

console.log("result from outside: ", r);

