import { Injectable } from "@nestjs/common";
import { UsersInterface } from './users.interface';

@Injectable()
export class UsersService {
    
    private readonly users = [
        {
            userId: 1,
            username: "john",
            password: "changeme",
        },
        {
            userId: 2,
            username: "maria",
            password: "guess",
        },
    ];
    async findOne(username: string): Promise<UsersInterface> {
        return this.users.find((user) => user.username === username);
    }
    
}
