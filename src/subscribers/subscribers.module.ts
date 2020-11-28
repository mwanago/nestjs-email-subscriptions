import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './subscriber.entity';
import { SubscribersController } from './subscribers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  exports: [],
  controllers: [SubscribersController],
})
export class SubscribersModule {}
