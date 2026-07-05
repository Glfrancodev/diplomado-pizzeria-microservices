import { NestFactory } from '@nestjs/core';
import { KitchenModule } from './kitchen.module';

async function bootstrap() {
  const app = await NestFactory.create(KitchenModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
