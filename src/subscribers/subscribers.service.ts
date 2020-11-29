import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Subscriber from './subscriber.entity';
import CreateSubscriberDto from './dto/createSubscriber.dto';
import { Repository } from 'typeorm';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class SubscribersService {
  constructor(
    @InjectRepository(Subscriber)
    private subscribersRepository: Repository<Subscriber>,
  ) {}

  @GrpcMethod()
  async addSubscriber(subscriber: CreateSubscriberDto) {
    const newSubscriber = await this.subscribersRepository.create(subscriber);
    await this.subscribersRepository.save(newSubscriber);
    return newSubscriber;
  }

  @GrpcMethod()
  async getAllSubscribers() {
    const data = await this.subscribersRepository.find();
    return {
      data
    }
  }
}
