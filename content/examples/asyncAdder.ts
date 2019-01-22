declare var setTimeout: any;

/**
 * @note
 * this function is a async simulation
 * return promise if no callback function passed as argument 
 */

export function
    asyncAdder(
        a: number,
        b: number,
        cb: Function | null = null): void | Promise<number> {

    if (cb)
        setTimeout(function () {
            cb(a + b);
        }, 500);

    else
        return new Promise(res => {
            setTimeout(function () {
                res(a + b);
            }, 500);
        });
}


