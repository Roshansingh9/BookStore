import express from "express";
import request from "supertest";

const app = express();
app.get("/ping", (req, res) => res.status(200).json({ msg: "pong" }));

describe("Basic test", () => {
  it("should return pong", async () => {
    const res = await request(app).get("/ping");
    expect(res.statusCode).toBe(200);
  });
});
