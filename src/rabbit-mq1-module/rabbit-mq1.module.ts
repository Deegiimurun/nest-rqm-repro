import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { RabbitMq1Controller } from './rabbit-mq-1.controller';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'amq.direct',
          type: 'direct',
        },
      ],
      uri: 'amqp://guest:guest@localhost:5001',
      connectionInitOptions: { wait: false },
      enableControllerDiscovery: true,
    }),
  ],
  controllers: [RabbitMq1Controller],
})
export class RabbitMq1Module {}
