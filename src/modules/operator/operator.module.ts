import { Module } from '@nestjs/common';
import { OperatorService } from './services/operator.service';
import { OperatorController } from './controllers/operator.controller';

@Module({
  providers: [OperatorService],
  controllers: [OperatorController]
})
export class OperatorModule {}
