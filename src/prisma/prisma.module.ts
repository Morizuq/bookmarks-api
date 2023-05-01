import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
//Global makes the exports available on a global scope
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
