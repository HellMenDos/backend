import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
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

  @Column({ default: '' })
  questionId: string

}
