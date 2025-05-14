import { ServeStaticModule } from '@nestjs/serve-static';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { secret } from './utils/constants';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { User, UserSchema } from './model/user.schema';
import { Video, VideoSchema } from './model/video.shcema';
import { VideoController } from './controller/video.controller';
import { UserController } from './controller/user.controller';
import { VideoService } from './service/video.service';
import { UserService } from './service/user.service';
import { isAuthenticated } from './app.middleware';

@Module({
  
  imports: [
    MongooseModule.forRoot('mongodb+srv://dixitgautam01:pdKUhHbR1m2jYRHa@cluster0.y59fys6.mongodb.net/'),

    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    
    MongooseModule.forFeature([{name: Video.name, schema: VideoSchema}]),

    MulterModule.register({
      storage: diskStorage({
        destination: './public',
        filename:(req, file, cb) => {
          const ext = file.mimetype.split('/')[1];
          cb(null, `${uuidv4()}-${Date.now()}.${ext}`)
        }
      })
    }),

    JwtModule.register({
      secret,
      signOptions: {expiresIn: '2h'}
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [VideoController, UserController],
  providers: [VideoService, UserService]
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(isAuthenticated).exclude(
       {path: '/video/:id', method: RequestMethod.GET }).forRoutes(VideoController);
  }
}



