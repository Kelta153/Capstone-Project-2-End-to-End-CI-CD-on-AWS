const request = require("supertest");
const app = require("../src/app");

describe("AWS CI/CD Capstone Application", () => {
  test("GET / should return the landing page", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("AWS CI/CD Capstone Project");
  });

  test("GET /health should return application health", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      status: "OK",
      message: "Application is healthy",
    });
  });
  test("GET /unknown should return 404", async () => {
    const response = await request(app).get("/unknown");

    expect(response.statusCode).toBe(404);

    expect(response.body).toEqual({
      status: "error",
      message: "Route not found",
    });
  });
});
