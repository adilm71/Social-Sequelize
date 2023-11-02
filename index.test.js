const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await sequelize.sync({ force: true });
  });
  test("To see if models are defined properly", () => {
    expect(User === sequelize.models.User).toBe(true);
  });
});
