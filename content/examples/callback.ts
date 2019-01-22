declare var console: any;
import { asyncAdder } from './asyncAdder';

let r;

asyncAdder(1, 2, function (res: number) {
    r = res;
    console.log("result from inside: ", r);
});

console.log("result from outside: ", r);
