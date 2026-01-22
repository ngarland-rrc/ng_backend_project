import request, { Response } from "supertest";
import app from "../src/app";

describe("GET /api/v1/portfolio/performance", () => {
    it("should return calculated portfolio with correct properties when query parameters are provided", async () => {
        const response: Response = await request(app)
            .get("/api/v1/portfolio/performance?initialInvestment=10000&currentValue=16000");

        expect(response.status).toBe(200);
        expect(response.body.initialInvestment).toBe(10000);
        expect(response.body.currentValue).toBe(16000);
        expect(response.body).toHaveProperty("profitOrLoss");
        expect(response.body).toHaveProperty("percentageChange");
        expect(response.body).toHaveProperty("performanceSummary");
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("should return with excellent gain performance summary", async () => {
        const response: Response = await request(app)
            .get("/api/v1/portfolio/performance?initialInvestment=10000&currentValue=16000");

        expect(response.status).toBe(200);
        expect(response.body.initialInvestment).toBe(10000);
        expect(response.body.currentValue).toBe(16000);
        expect(response.body.profitOrLoss).toBe(6000);
        expect(response.body.percentageChange).toBe(60);
        expect(response.body.performanceSummary).toBe("Excellent performance! Your investments are doing great.");
    });
});
