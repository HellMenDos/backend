import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { QuestionsEntity } from './Questions.entity';
import { UserEntity } from './Users.entity';

@Entity('comments')
export class CommentsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  user: UserEntity

  @Column({ default: new Date() })
  date: Date;

  @ManyToOne(() => QuestionsEntity, (user) => user.comments)
  question: QuestionsEntity

}
