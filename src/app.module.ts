import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { OperatorModule } from './modules/operator/operator.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: '172.21.43.79',
      port: 5432,
      username: "postgres",
			password: "postgres",
      database: 'JIH',
      schema: "public",
      synchronize: false,
      entities: [__dirname + '/models/**/*{.ts,.js}'],
      autoLoadEntities: true,
      
    }),
    UserModule,
    OperatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
