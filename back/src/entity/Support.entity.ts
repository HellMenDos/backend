import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';


@Entity('supports')
export class SupportsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  describe: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  telegram: string;
}
