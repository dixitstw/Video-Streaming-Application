import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { secret } from './utils/constants';
import { join } from 'path';

@Module({

  imports: [
    MongooseModule.forRoot('mongodb+srv://dixitgautam01:pdKUhHbR1m2jYRHa@cluster0.y59fys6.mongodb.net/'),
    JwtModule.register({
      secret,
      signOptions: {expiresIn: '2h'}x
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    })
  ],
})
export class AppModule {}



