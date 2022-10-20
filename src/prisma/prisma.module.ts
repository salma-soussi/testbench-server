import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaService2 } from './prisma2.service';

@Global()
@Module({
  providers: [PrismaService ,PrismaService2],
  exports: [PrismaService,PrismaService2],
})
export class PrismaModule {}
