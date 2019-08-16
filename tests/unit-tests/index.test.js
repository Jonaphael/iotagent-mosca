"use strict";

/**
 * Unit tests for index  file
 *
 * This module has the following dependencies:
 *
 */
describe("Testing index", () => {

    beforeEach(() => {
        
    });

    it("Should catch a error", async () => {
        try {
            const index = await require("../../src/index");
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

});
