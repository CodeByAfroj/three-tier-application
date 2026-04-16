import sys, os; sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')));
import request from "supertest";
import app from '../app';
process.env.MONGO_URI = 'mongodb://localhost:27017/test';
describe("Health Check API", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("OK");
  });
});