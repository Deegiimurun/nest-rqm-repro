import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { RabbitMq2Controller } from './rabbit-mq-2.controller';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'amq.direct',
          type: 'direct',
        },
      ],
      uri: 'amqp://guest:guest@localhost:5002',
      connectionInitOptions: { wait: false },
      enableControllerDiscovery: true,
    }),
  ],
  controllers: [RabbitMq2Controller],
})
export class RabbitMq2Module {}
