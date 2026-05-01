import app from "../src/app.js";
import { calculateDiscount } from "../src/utils/calculate.js";
import request from "supertest";

describe("App", () => {
    it("Test  should return correct discount amount", () => {
        const calculate = calculateDiscount(100, 10);
        expect(calculate).toBe(10);
    });

    it("should return 200 status code", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});
