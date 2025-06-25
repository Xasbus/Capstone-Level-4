import { Account } from "./Account";
import { updateAccount } from "./updateAccount";

describe("updateAccount", () => {
  it("update info when email & password are matching", async () => {
    //ARRANGE
    const updateUser: Account = {
      email: "test@email.com",
      password: "test",
      name: "Joe",
      phone: "5552652987",
    };

    //ACT
    const result = await updateAccount(updateUser);

    //ASSERT
    expect(result).toEqual({
      email: updateUser.email,
      password: updateUser.password,
      name: updateUser.name,
      phone: updateUser.phone,
    });
  });
  it("returns error when given nonexisting email", async () => {
    //ARRANGE
    const updateUser: Account = {
      email: "nothing@email.com",
      password: "test",
      name: "Paul",
      phone: "5557682034",
    };

    //ACT
    const result = await updateAccount(updateUser);

    //ASSERT
    expect(result).toBe(false);
  });
  it("returns undefined when given empty email", async () => {
    //ARRANGE
    const updateUser: Account = {
      email: "",
      password: "test1",
      name: "Joe",
      phone: "5559874312",
    };

    //ACT
    const result = await updateAccount(updateUser);

    //ASSERT
    expect(result).toBe(false);
  });
  it("returns error when given empty password", async () => {
    //ARRANGE
    const updateUser: Account = {
      email: "test@email.com",
      password: "",
      name: "Sue",
      phone: "5552784567",
    };

    //ACT
    const result = await updateAccount(updateUser);

    //ASSERT
    expect(result).toBe(false);
  });
  it("returns error when given email already exists but password doesn't match", async () => {
    //ARRANGE
    const updateUser: Account = {
      email: "test@email.com",
      password: "wrongPassword",
      name: "Amy",
      phone: "5550931234",
    };

    //ACT
    const result = await updateAccount(updateUser);

    //ASSERT
    expect(result).toBe(false);
  });
});
