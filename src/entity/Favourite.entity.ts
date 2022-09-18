import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, BaseEntity } from 'typeorm';
import { QuestionsEntity } from './Questions.entity';
import { UserEntity } from './Users.entity';

@Entity('favourite')
export class FavouriteEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.favourite)
  user: UserEntity


  @Column({ default: new Date() })
  date: Date;

  @Column({ default: '' })
  questionId: string
}
