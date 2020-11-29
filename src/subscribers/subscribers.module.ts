import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './subscriber.entity';
import { SubscribersService } from './subscribers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  exports: [],
  controllers: [SubscribersService],
})
export class SubscribersModule {}
