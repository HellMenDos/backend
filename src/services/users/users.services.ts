import { Injectable } from "@nestjs/common";
import { UsersDto } from './users.dto';

@Injectable()
export  class UsersServices {
    private users: UsersDto[] = [
        {
            name:"Kirill",
            email:"hello@gmail.com",
            password: "111111"
        }
    ]

    constructor() {}

    public getAll() {
        return this.users
    }

    public find(email: string, password: string) {
        return this.users.find((item) => item.email == email && item.password == password)
    }

    public findByEmail(email: string) {
        return this.users.find((item) => item.email == email)
    }

    public push(user: UsersDto) {
        return this.users.push(user)
    }
}