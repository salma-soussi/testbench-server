import { Module } from '@nestjs/common';
import { AttributesController } from './attributes.controller';

@Module({
  controllers: [AttributesController]
})
export class AttributesModule {}
