import { createAccount } from "./createAccount";
import { Account } from "./DataType/Account";
import { delAccount } from "./delAccount";

describe("createAccount", () => {
  it("add new account into logins table and receive true when given new email", async () => {
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
    expect(result).toBe(true);

    //CLEAN
    await delAccount(createUser);
  });

  it("returns false when given existing email", async () => {
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
    expect(result).toBe(false);
  });
  it("returns false when given empty email", async () => {
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
    expect(result).toBe(false);
  });
  it("returns false when given empty password with existing email", async () => {
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
    expect(result).toBe(false);
  });
  it("returns false when given email already exists but password doesn't match", async () => {
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
    expect(result).toBe(false);
  });
});
