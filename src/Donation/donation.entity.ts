import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'donation' })
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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  time: Date;
}
