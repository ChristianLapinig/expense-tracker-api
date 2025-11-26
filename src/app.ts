import express from "express";
import type { Request, Response } from "express";

export default function createApp() {
	const app = express();

	app.get("/", (req: Request, res: Response) => {
		res.send("Expense Tracker API");
	});
	app.get("/api/hello", (req: Request, res: Response) => {
		res.json({
			name: "Expense Tracker API",
			description: "API for tracking personal expenses.",
			version: "1.0.0",
		});
	});

	return app;
}
