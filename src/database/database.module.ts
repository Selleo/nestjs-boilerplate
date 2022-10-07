import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  databaseConfig,
  DatabaseConfigType,
  makeConnectionConfig,
} from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [databaseConfig.KEY],
      useFactory(config: DatabaseConfigType) {
        return {
          ...makeConnectionConfig(config),
        };
      },
    }),
  ],
})
export class DatabaseModule {}
