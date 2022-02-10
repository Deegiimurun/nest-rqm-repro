import { Controller } from '@nestjs/common';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class RabbitMq2Controller {
  @RabbitRPC({
    exchange: 'amq.direct',
    routingKey: 'rpc-route2',
    queue: 'rpc-queue2',
  })
  // eslint-disable-next-line @typescript-eslint/ban-types
  public async rpcHandler(msg: {}) {
    console.log(msg);
  }
}
