import { Account } from "./DataType/Account";
import { delAccount } from "./delAccount";

describe("delAccount", () => {
  it("remove account when given an existing account", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "test2@email.com",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await delAccount(removeUser);

    //ASSERT
    expect(result).toBe(true);
  });
  it("returns false when email is empty", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "",
      password: "test",
      name: "",
      phone: "",
    };

    //ACT
    const result = await delAccount(removeUser);

    //ASSERT
    expect(result).toBe(false);
  });
  it("returns false when password is empty", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "test@email",
      password: "",
      name: "",
      phone: "",
    };

    //ACT
    const result = await delAccount(removeUser);

    //ASSERT
    expect(result).toBe(false);
  });
  it("returns false when given unmatching email or password", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "test@email.com",
      password: "jasof",
      name: "",
      phone: "",
    };

    //ACT
    const result = await delAccount(removeUser);

    //ASSERT
    expect(result).toBe(false);
  });
  it("returns false when given email that doesn't exist", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "nothing@email.com",
      password: "nothing",
      name: "",
      phone: "",
    };

    //ACT
    const result = await delAccount(removeUser);

    //ASSERT
    expect(result).toBe(false);
  });
});
