import { Controller, Get } from '@nestjs/common';
import { KitchenService } from './kitchen.service';

@Controller()
export class KitchenController {
  constructor(private readonly kitchenService: KitchenService) {}

  @Get()
  getHello(): string {
    return this.kitchenService.getHello();
  }
}
