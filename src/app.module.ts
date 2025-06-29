import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users/users.controller';
import { HomeController } from './home/home.controller';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';
import { EventGateway } from './event/event.gateway';
import { GeminiModule } from './gemini/gemini.module';
import { ChatController } from './gemini/chatbot/chat.controller';
import { TeacherController } from './gemini/chatbot/teacher.controller';
import { ChatModule } from './gemini/chatbot/chat.module';
import { TeacherModule } from './gemini/chatbot/teacher.module';
import { GeminiController } from './gemini/presenters/gemini.controller';
import { GeminiProModelProvider } from './gemini/gemini.provider';
import { ImageController } from './image/image.controller';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://chuu:chuu@mongo:27017/chuu?authSource=admin',
    ),
    UserModule,
    HomeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    PostModule,
    ChatModule,
    GeminiModule,
    TeacherModule,
    ImageModule,
  ],
  controllers: [
    AppController,
    HomeController,
    UserController,
    PostController,
    ChatController,
    TeacherController,
    GeminiController,
    ImageController,
  ],
  providers: [AppService, EventGateway, GeminiProModelProvider],
})
export class AppModule {}
