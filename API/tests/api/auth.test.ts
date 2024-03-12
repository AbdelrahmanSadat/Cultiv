import supertest from "supertest";
import app from "../../src/app";

let server: any;

beforeAll(async () => {
  // Start the Express server before running the tests
  await new Promise<void>((resolve) => {
    server = app.listen(process.env.TESTING_PORT, () => {
      console.log("Server started on port 3000");
      resolve();
    });
  });
});

afterAll(async () => {
  // Close the server after running the tests
  await new Promise<void>((resolve) => {
    // @ts-ignore
    server.close(() => {
      console.log("Server closed");
      resolve();
    });
  });
});

let createdUserId: number;

describe("Register User", () => {
  it("should return status 201 if user created", async () => {
    const user = {
      email: "test@test.com",
      password: "password",
    };
    const res = await supertest(app).post("/register").send(user);
    expect(res.status).toEqual(201);
    expect(res.body.userId).toBeTruthy();

    createdUserId = res.body.userId;
  });
});

describe("Delete user", () => {
  it("should return status 200 if user deleted", async () => {
    const res = await supertest(app).delete(`/users/${createdUserId}`);
    expect(res.status).toEqual(200);
  });
});
