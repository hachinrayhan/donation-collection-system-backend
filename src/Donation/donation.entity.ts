import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  mobileNumber: string;

  @Column()
  amount: number;

  // Add additional columns and relationships as needed
}
