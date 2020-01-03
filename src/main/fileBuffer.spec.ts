import { FileBuffer } from "./fileBuffer";

describe("FileBuffer", (): void => {
    /*beforeEach(){

    }*/

    test("should return 42", () => {
        const buffer = new FileBuffer();
        expect(buffer.foo()).toBe(42);
    });

    xit("read buffer", (): void => {
        expect(1).not.toBeUndefined();
    });
});
