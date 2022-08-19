import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { TablesModule } from './tables/tables.module';
import { AttributesModule } from './attributes/attributes.module';

@Module({
  imports: [CategoriesModule, UsersModule, TablesModule, AttributesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
