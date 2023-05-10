import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Generated, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Post } from './post';

@Entity({name: "users"})
export class User extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    @Generated("uuid")
    id!: string;

    @Column()
    name!: string

    @Column()
    age!: Number

    @Column()
    email!: string

    @Column()
    telephone!: string

    @CreateDateColumn()
    createdat!: Date

    @UpdateDateColumn()
    updatedat!: Date
    @OneToMany( () => Post, (post) => post.user)
    posts!: Post[];
}