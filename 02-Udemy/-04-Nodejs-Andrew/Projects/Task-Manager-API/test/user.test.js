const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../src/app");
const User = require("../src/models/user");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  name: "LastOne",
  email: "finishTest@bvhrk.com",
  password: "FinishTest##05",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("Signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "LastOne",
      email: "finishTest@bvhrk.com",
      password: "FinishTest##05",
    })
    .expect(201);
  // Assert  The Database Was Changed Correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();
  // Assertions about the response
  expect(response.body).toMatchObject({
    user: {
      name: "one",
      email: "one@one.com",
    },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe("FinishTest##05");
});

test("Login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});

test("Not login nonexistent user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "FinishTest##05",
    })
    .expect(400);
});

test("Get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Not get profile for user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("Delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test("Not delete account for user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});

test("Upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "test/fixtures/profile-pic.jpg")
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("Update valid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "ABC",
    })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.name).toEqual("ABC");
});

test("Not update invalid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: "egypt",
    })
    .expect(400);
});
