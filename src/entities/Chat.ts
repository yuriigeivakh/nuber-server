import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Message from './Message';
import User from './User';

@Entity()
class Chat extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({type: 'text'}) text: string;

    @OneToMany(type => Message, message => message.chat) messages: Message[];

    @OneToMany(type => User, user => user.chat) participants: User[];

    @CreateDateColumn() createdAt: string;

    @UpdateDateColumn() updatedAt: string;
}

export default Chat
