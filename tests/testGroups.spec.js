import {test} from '@playwright/test';

test.describe("Test Group1", () => {
    test.beforeAll(() => {
        console.log("Before All Test Cases");
    });

    test.afterAll(() => {
        console.log("After All Test Cases");
    });
    
    test.beforeEach(() => {
        console.log("Before Each Test Case");
    });
    
    test.afterEach(() => {
        console.log("After Each Test Case");
    });
    
    test("Test Case 1", async ({page}) => {
        console.log("Executing Test Case 1");
    });

    test("Test Case 2", async ({page}) => {
        console.log("Executing Test Case 2");
    });

    test("Test Case 3", async ({page}) => {
        console.log("Executing Test Case 3");
    });
    
});