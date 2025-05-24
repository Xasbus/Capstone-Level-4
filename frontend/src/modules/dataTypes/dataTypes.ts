import { CreateAccount, DeleteAccount, UpdateAccount } from "./userAccount";

export type Account = Array<CreateAccount | UpdateAccount | DeleteAccount>;
