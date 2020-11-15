import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { SubscribersController } from './subscribers/subscribers.controller';
import { SubscribersService } from './subscribers/subscribers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './subscribers/subscriber.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscriber]),
    DatabaseModule,
    SubscribersModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
  ],
  controllers: [SubscribersController],
  providers: [AppService, SubscribersService],
})
export class AppModule {}
