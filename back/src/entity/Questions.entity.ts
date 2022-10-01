import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { UserEntity } from './Users.entity';

@Entity('questions')
export class QuestionsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  verify: boolean;

  @Column()
  title: string;

  @Column()
  describe: string;

  @Column({ default: '' })
  tech: string;

  @Column({ default: '' })
  lang: string;

  @Column()
  photo: string;

  @ManyToOne(() => UserEntity, (user) => user.questions)
  user: UserEntity

}
