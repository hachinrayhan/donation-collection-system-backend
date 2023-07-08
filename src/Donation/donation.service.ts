import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Donation } from './donation.entity';

@Injectable()
export class DonationService {
  constructor(
    @InjectRepository(Donation)
    private donationRepository: Repository<Donation>,
  ) {}

  async findAll(): Promise<Donation[]> {
    return this.donationRepository.find();
  }

  async findById(id: number): Promise<Donation> {
    const findOptions: FindOneOptions<Donation> = { where: { id } };
    return this.donationRepository.findOne(findOptions);
  }

  async create(donation: Donation): Promise<Donation> {
    return this.donationRepository.save(donation);
  }

  async update(id: number, donation: Donation): Promise<Donation> {
    await this.donationRepository.update(id, donation);
    return this.findById(id);
  }

  async softDelete(id: number): Promise<void> {
    await this.donationRepository.softDelete(id);
  }

  async restore(id: number): Promise<void> {
    await this.donationRepository.restore(id);
  }

  async delete(id: number): Promise<void> {
    await this.donationRepository.delete(id);
  }
}
