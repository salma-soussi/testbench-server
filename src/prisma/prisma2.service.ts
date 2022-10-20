import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../../prisma/generated/client2';

@Injectable()
export class PrismaService2 extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL2'),
        },

      },
    });
  }
}
