import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'sqlserver://localhost:1433;schema=TestbenchVisualisation;database=Testbench;user=sa;password=imbus2013-2022;trustServerCertificate=true',
        },
      },
    });
  }
}
