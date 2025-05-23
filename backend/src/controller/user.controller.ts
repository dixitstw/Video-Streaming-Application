import { UserService } from "src/service/user.service";
import { JwtService } from '@nestjs/jwt'
import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { User } from "src/model/user.schema";


@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {}

    @Post('signup')
    async Signup(@Res() response, @Body() user: User) {
        const newUser = await this.userService.signup(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }

    @Post('signin')
    async Signin(@Res() response, @Body() user: User) {
        const token = await this.userService.signin(user, this.jwtService);
        return response.status(HttpStatus.OK).json(token)
    }

}