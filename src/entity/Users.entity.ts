import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { CommentsEntity } from './Comments.entity';
import { QuestionsEntity } from './Questions.entity';
import { FavouriteEntity } from './Favourite.entity';
import { Exclude } from 'class-transformer';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ default: false })
  verify: boolean;

  @Column()
  verifyToken: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @OneToMany(() => QuestionsEntity, (question) => question.user)
  questions: QuestionsEntity[]

  @OneToMany(() => CommentsEntity, (commnets) => commnets.user)
  comments: CommentsEntity[]

  @OneToMany(() => FavouriteEntity, (favourite) => favourite.user)
  favourite: FavouriteEntity[]
}
