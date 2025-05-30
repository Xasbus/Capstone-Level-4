import { Account } from "../Types/Account";
import { createAccount } from "./createAccount";

describe("createAccount", () => {
  it("add new email and password into logins table", async () => {
    //ARRANGE
    const createUser: Account = {
      email: "new@email.com",
      password: "new",
      name: "Todd",
      phone: "King",
    };

    //ACT
    const result = await createAccount(createUser);

    //ASSERT
    expect(result).toHaveProperty("new@email.com");
    expect(result).toHaveProperty("new");
  });
  it.skip("returns error when given existing email", async () => {
    //ARRANGE
    const createUser: Account = {
      email: "test@email.com",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await createAccount(createUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it.skip("returns undefined when given empty email", async () => {
    //ARRANGE
    const createUser: Account = {
      email: "",
      password: "test1",
      name: "",
      phone: "",
    };

    //ACT
    const result = await createAccount(createUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it.skip("returns error when given empty password", async () => {
    //ARRANGE
    const createUser: Account = {
      email: "test@email.com",
      password: "",
      name: "",
      phone: "",
    };

    //ACT
    const result = await createAccount(createUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
  it.skip("returns error when given email already exists but password doesn't match", async () => {
    //ARRANGE
    const createUser: Account = {
      email: "test@email.com",
      password: "wrongPassword",
      name: "",
      phone: "",
    };

    //ACT
    const result = await createAccount(createUser);

    //ASSERT
    expect(result).toBeUndefined();
  });
});
