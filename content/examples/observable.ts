declare var console: any;
import { asyncAdder } from './asyncAdder';
import * as rxjs from 'rxjs';
// import * as op from 'rxjs/operators';

rxjs.from(<Promise<any>>asyncAdder(1, 2))
    .subscribe(
        res => console.log(res),
        err => console.log("Error: ", err),
        () => console.log("done")
    );

/* rxjs
    .range(0, 5)
    .pipe(
        op.map(v => v / 2),
        op.skip(1),
        op.take(3),
        op.delay(1000)
    )
    .subscribe(
        res => console.log(res),
        err => console.log("Error: ", err),
        () => console.log("finished")
    ); */