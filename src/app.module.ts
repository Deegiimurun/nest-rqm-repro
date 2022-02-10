import { Module } from '@nestjs/common';
import { RabbitMq1Module } from './rabbit-mq1-module/rabbit-mq1.module';
import { RabbitMq2Module } from './rabbit-mq2-module/rabbit-mq2.module';

@Module({
  imports: [RabbitMq1Module, RabbitMq2Module],
})
export class AppModule {}
