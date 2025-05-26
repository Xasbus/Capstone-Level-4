import { Account } from "../Types/Account";
import { createAccount } from "./createAccount";

describe("createAccount", () => {
  it("add new email and password into logins table", async () => {
    //ARRANGE
    const createUser: Account = {
      email: "putin@email.com",
      password: "1new1",
      name: "",
      phone: "",
    };

    //ACT
    const result = await createAccount(createUser);

    //ASSERT
    expect(result).toBeDefined();
  });
  it.skip("returns message when given existing email", async () => {
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
  it.skip("returns error when given empty password don't match", async () => {
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
  it.skip("returns error when given email already exists", async () => {
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
});
