export class User {
    public readonly id: string;
    public readonly name: string;
    public readonly email: string;
    private _password: string;

    constructor(id: string, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this._password = password;
    }

    public get password(): string {
        return this._password;
    }

    public set password(newPassword: string) {
        this._password = newPassword;
    }
}
