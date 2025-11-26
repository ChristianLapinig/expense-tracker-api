import request from "supertest";
import { describe, test, expect } from "bun:test";
import createApp from "../app";

describe("API endpoints", () => {
	test("GET /api/hello", async () => {
		const app = createApp();
		const res = await request(app)
			.get("/api/hello")
			.expect(200);
		expect(res.body.name).toBe("Expense Tracker API");
	});
});
