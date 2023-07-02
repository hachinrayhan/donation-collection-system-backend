import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonationModule } from './donation/donation.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DonationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
