import { jest } from "@jest/globals";
import request from "supertest";
import app from "../js/server.js";

describe("API Endpoints", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("GET /github should return GitHub config", async () => {
    const res = await request(app).get("/github");
    expect(res.status).toBe(200);
  });

  it("GET /example should serve example HTML", async () => {
    const res = await request(app).get("/example");
    expect(res.status).toBe(200);
    expect(res.header["content-type"]).toMatch(/text\/html/);
  });

  it("GET /iframe should fail without auth", async () => {
    const res = await request(app).get("/iframe");
    expect([401, 500]).toContain(res.status);
  });

  it("GET /foot should fail without auth", async () => {
    const res = await request(app).get("/foot");
    expect([401, 500]).toContain(res.status);
  });

  it("POST /v should fail without auth", async () => {
    const res = await request(app).post("/v");
    expect([401, 500]).toContain(res.status);
  });

  it("GET /random-route should fail with 500 if dist is not built", async () => {
    const res = await request(app).get("/random-route");
    expect(res.status).toBe(500);
  });
});
