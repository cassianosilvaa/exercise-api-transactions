import { users } from "./users";

export class UserDatabase {
    public list() {
        return [...users];
    }
}
