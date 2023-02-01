// Criar uma classe User, que deverá ter como propriedades name,
// cpf, email, age e transactions (sendo esse um array).
import { v4 as createUuid } from "uuid";

export class User {
    private _id: string;

    constructor(
        private _name: string,
        private _cpf: string,
        private _email: string,
        private _age: number,
        private _transactions?: number[]
    ) {
        this._id = createUuid();
    }

    public get age() {
        return this._age;
    }

    public toJson() {
        return {
            id: this._id,
            name: this._name,
            cpf: this._cpf,
            email: this._email,
            age: this._age,
        };
    }
}
