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

describe("GET /api/v1/portfolio/performance", () => {
    it("should return with solid gain performance summary", async () => {
        const response: Response = await request(app)
            .get("/api/v1/portfolio/performance?initialInvestment=10000&currentValue=12000");

        expect(response.status).toBe(200);
        expect(response.body.initialInvestment).toBe(10000);
        expect(response.body.currentValue).toBe(12000);
        expect(response.body.profitOrLoss).toBe(2000);
        expect(response.body.percentageChange).toBe(20);
        expect(response.body.performanceSummary).toBe("Solid gain. Keep monitoring your investments.");
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("should return with modest gain performance summary", async () => {
        const response: Response = await request(app)
            .get("/api/v1/portfolio/performance?initialInvestment=10000&currentValue=10900");

        expect(response.status).toBe(200);
        expect(response.body.initialInvestment).toBe(10000);
        expect(response.body.currentValue).toBe(10900);
        expect(response.body.profitOrLoss).toBe(900);
        expect(response.body.percentageChange).toBe(9);
        expect(response.body.performanceSummary).toBe("Modest gain. Your portfolio is growing slowly.");
    });
});

describe("GET /api/v1/portfolio/performance", () => {
    it("should return with no change performance summary", async () => {
        const response: Response = await request(app)
            .get("/api/v1/portfolio/performance?initialInvestment=10000&currentValue=10000");

        expect(response.status).toBe(200);
        expect(response.body.initialInvestment).toBe(10000);
        expect(response.body.currentValue).toBe(10000);
        expect(response.body.profitOrLoss).toBe(0);
        expect(response.body.percentageChange).toBe(0);
        expect(response.body.performanceSummary).toBe("No change. Your portfolio is steady.");
    });
});

