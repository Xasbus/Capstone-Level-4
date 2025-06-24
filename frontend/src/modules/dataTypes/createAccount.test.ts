import { Account } from "./Account";
import { createAccount } from "./createAccount";
// import { removeAccount } from "./removeAccount";

jest.setTimeout(40000);

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
    expect(result).toEqual({
      email: createUser.email,
      password: createUser.password,
      name: createUser.name,
      phone: createUser.phone,
    });

    //CLEAN
    // await removeAccount(createUser);
  });

  it("returns false when given existing email with matching password", async () => {
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
  it("returns false when given existing email, but password is empty", async () => {
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
  it("returns false when given existing email but password doesn't match", async () => {
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
