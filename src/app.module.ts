import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

// 启动 mongod --config /usr/local/etc/mongod.conf
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/config'), CatsModule],
})
export class AppModule {}
