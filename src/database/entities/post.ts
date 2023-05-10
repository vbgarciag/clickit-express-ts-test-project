import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Generated, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user';

@Entity({name: "posts"})
export class Post extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    @Generated("uuid")
    id!: string;

    @Column()
    title!: string

    @Column()
    description!: String

    @Column("uuid")
    user_id!: String

    // relationships

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({
        name: "user_id"
    })
    user!: User
}