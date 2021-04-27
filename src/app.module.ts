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
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
			password: "jhipassword",
      database: 'JIH',
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
