import { Controller } from '@nestjs/common';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class RabbitMq1Controller {
  @RabbitRPC({
    exchange: 'amq.direct',
    routingKey: 'rpc-route1',
    queue: 'rpc-queue1',
  })
  // eslint-disable-next-line @typescript-eslint/ban-types
  public async rpcHandler(msg: {}) {
    console.log(msg);
  }
}
