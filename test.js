const request = require("supertest");
    const app = require("./index.js");

    describe("GET /", () => {
      it("respond with Hello World", (done) => {
        request(app).get("/").expect("Hello World", done);
      })
    });