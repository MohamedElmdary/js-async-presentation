import { asyncAdder } from '../content/examples/asyncAdder';

describe("way of testing async code with jest", () => {

    test("Method #1", function (done: Function) {
        asyncAdder(1, 2, function (res: number) {
            expect(res).toBe(3);
            done();
        });
    });

    test("Method #2", function (done: Function) {
        (<Promise<number>>asyncAdder(1, 2))
            .then(res => {
                expect(res).toBe(3);
                done();
            });
    });

    test("Method #3", async function () {
        let res = await (<Promise<number>>asyncAdder(1, 2));
        expect(res).toBe(3);
    });

    test("Method #1", async function () {
        return expect(await asyncAdder(1, 2)).toBe(3);
    });

});