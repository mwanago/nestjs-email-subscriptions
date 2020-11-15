import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import CreateSubscriberDto from './dto/createSubscriber.dto';
import { SubscribersService } from './subscribers.service';

@Controller()
export class SubscribersController {
  constructor(
    private readonly subscribersService: SubscribersService,
  ) {}

  @MessagePattern({ cmd: 'add-subscriber' })
  addSubscriber(subscriber: CreateSubscriberDto) {
    return this.subscribersService.addSubscriber(subscriber);
  }

  @MessagePattern({ cmd: 'get-all-subscribers' })
  getAllSubscribers() {
    return this.subscribersService.getAllSubscribers();
  }
}