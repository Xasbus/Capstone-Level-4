// import { Account } from "./Account";
// import { createAccount } from "./createAccount";

// describe("createAccount", () => {
//   it.skip("add new email and password into logins table", async () => {
//     //ARRANGE
//     const createUser: Account = {
//       email: "NEEDnewEMAILforEACHtest@email.com",
//       password: "new2",
//       name: "",
//       phone: "",
//     };

//     //ACT
//     const result = await createAccount(createUser);

//     //ASSERT
//     expect(result).toBeDefined();
//   });
//   it.skip("returns error when given existing email", async () => {
//     //ARRANGE
//     const createUser: Account = {
//       email: "test@email.com",
//       password: "test",
//       name: "",
//       phone: "",
//     };

//     //ACT
//     const result = await createAccount(createUser);

//     //ASSERT
//     expect(result).toBeUndefined();
//   });
//   it.skip("returns undefined when given empty email", async () => {
//     //ARRANGE
//     const createUser: Account = {
//       email: "",
//       password: "test1",
//       name: "",
//       phone: "",
//     };

//     //ACT
//     const result = await createAccount(createUser);

//     //ASSERT
//     expect(result).toBeUndefined();
//   });
//   it.skip("returns error when given empty password", async () => {
//     //ARRANGE
//     const createUser: Account = {
//       email: "test@email.com",
//       password: "",
//       name: "",
//       phone: "",
//     };

//     //ACT
//     const result = await createAccount(createUser);

//     //ASSERT
//     expect(result).toBeUndefined();
//   });
//   it.skip("returns error when given email already exists but password doesn't match", async () => {
//     //ARRANGE
//     const createUser: Account = {
//       email: "test@email.com",
//       password: "wrongPassword",
//       name: "",
//       phone: "",
//     };

//     //ACT
//     const result = await createAccount(createUser);

//     //ASSERT
//     expect(result).toBeUndefined();
//   });
// });
