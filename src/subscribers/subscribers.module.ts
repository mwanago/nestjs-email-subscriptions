import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './subscriber.entity';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  providers: [SubscribersService],
  exports: [],
  controllers: [SubscribersController],
})
export class SubscribersModule {}
