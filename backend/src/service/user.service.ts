import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/model/user.schema";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async signup(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const reqBody = {
            fullname: user.fullname,
            email: user.email,
            password: hash
        }

        const newUser = new this.userModel(reqBody);
        return newUser.save();
    }

    async signin(user: User, jwt: JwtService): Promise<{token: string}> {
        const foundUser = await this.userModel.findOne({ email: user.email }).exec();
        if (foundUser) {
            const { password } = foundUser;
            if (await bcrypt.compare(user.password, password)) {
                const payload = { email: user.email };
                return {
                    token: jwt.sign(payload),
                };
            }
            throw new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
        }
        throw new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    }

    async getOne(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }
    

}