import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DonationService } from './donation.service';
import { Donation } from './donation.entity';

@Controller('donations')
export class DonationController {
  constructor(private donationService: DonationService) {}

  @Get()
  async findAll(): Promise<Donation[]> {
    return this.donationService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Donation> {
    return this.donationService.findById(id);
  }

  @Post()
  async create(@Body() donation: Donation): Promise<Donation> {
    return this.donationService.create(donation);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() donation: Donation,
  ): Promise<Donation> {
    return this.donationService.update(id, donation);
  }

  @Patch(':id/soft-delete')
  async softDelete(@Param('id') id: number): Promise<void> {
    return this.donationService.softDelete(id);
  }

  @Patch(':id/restore')
  async restore(@Param('id') id: number): Promise<void> {
    return this.donationService.restore(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.donationService.delete(id);
  }
}
