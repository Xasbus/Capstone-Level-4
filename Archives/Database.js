export class Database {
  secretKey = "abc123";
  isConnected = false;
  password = "assda";
  constructor(apiKey = "") {
    console.log(this.secretKey);
    console.log(this.isConnected);

    const doesMatch = apiKey === this.secretKey;
    if (doesMatch) this.isConnected = true;
  }

  async getData(logins = [], email = "") {
    const matchingLogin = {};

    if (this.isConnected) {
      console.log("Searching data, please wait...");

      for (const login of logins) {
        const doesMatch = email === login.email;
        if (doesMatch) {
          matchingLogin.email = login.email;
          matchingLogin.password = login.password;
        }
      }
    } else {
      console.log("Database didn't connect.");
    }
    return matchingLogin;
  }
}
