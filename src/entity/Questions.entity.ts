import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class QuestionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  describe: string;

  @Column()
  photo: string;

}
