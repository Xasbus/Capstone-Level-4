import { Account } from "./DataType/Account";
import { delAccount } from "./delAccount";

describe("delAccount", () => {
  it("remove account when given an existing account", async () => {
    //ARRANGE
    const removeUser: Account = {
      email: "new@email.com",
      password: "new",
      name: "",
      phone: "",
    };

    //ACT
    const result = await delAccount(removeUser);

    //ASSERT
    expect(result).not.toBeUndefined();
  });
  it.skip("returns undefined when email is empty", async () => {
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
    expect(result).toBeUndefined();
  });
  it.skip("returns undefined when password is empty", async () => {
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
    expect(result).toBeUndefined();
  });
  it.skip("returns error when given unmatching email or password", async () => {
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
    expect(result).toBeUndefined();
  });
  it.skip("returns error when given email that doesn't exist", async () => {
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
    expect(result).toBeUndefined();
  });
});
