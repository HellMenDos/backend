import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { UserEntity } from './Users.entity';
import { CommentsEntity } from './Comments.entity';

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

  @Column()
  photo: string;

  @ManyToOne(() => UserEntity, (user) => user.questions)
  user: UserEntity

}
