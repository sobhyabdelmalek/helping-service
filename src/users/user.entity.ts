import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column({type:'text'})
    bio: string;

    @Column({default: true})
    isActive: boolean;
}