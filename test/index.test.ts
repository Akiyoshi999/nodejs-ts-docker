import request from "supertest";
import app from "../src/index";

test("get /", () => {
  return request(app)
    .get("/")
    .then((res) => {
      expect(res.status).toEqual(200);
      expect(res.text).toEqual("Hello Typescript!");
    });
});
