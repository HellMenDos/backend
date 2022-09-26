import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
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
