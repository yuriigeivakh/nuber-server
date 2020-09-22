import bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Chat from './Chat';
import Message from './Message';
import Ride from './Ride';
import Verification from './Verification';

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({type: 'text', unique: true, nullable: true}) @IsEmail() email: string | null;

    @Column({type: 'boolean', default: false}) verifiedEmail: string;

    @Column({type: 'text'}) firstName: string;
    
    @Column({type: 'text'}) lastName: string;

    @Column({type: 'int', nullable: true}) age: number;

    @Column({type: 'text', nullable: true}) password: string;

    @Column({type: 'text', nullable: true}) phoneNumber: string;

    @Column({type: 'boolean', default: false}) verifiedPhoneNumber: boolean;

    @Column({type: 'text'}) profilePhoto: string;

    @Column({type: 'text', nullable: true}) fbId: string;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    @Column({type: 'boolean', default: false}) isDriving: boolean;

    @Column({type: 'boolean', default: false}) isRiding: boolean;

    @Column({type: 'boolean', default: false}) isTaken: boolean;

    @OneToMany(type => Chat, chat => chat.participants) chat: Chat[];

    @OneToMany(type => Message, message => message.user) messages: Message[];

    @OneToMany(type => Verification, verification => verification.user) verifications: Verification[];
    
    @OneToMany(type => Ride, ride => ride.passenger) ridesAsPassenger: Ride[];

    @OneToMany(type => Ride, ride => ride.driver) ridesADriver: Ride[];

    @Column({type: 'double precision', default: 0}) lastLng: number;

    @Column({type: 'double precision', default: 0}) lastLat: number;

    @Column({type: 'double precision', default: 0}) lastOrientation: number;

    @CreateDateColumn() createdAt: string;

    @UpdateDateColumn() updatedAt: string;

    private hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10)
    }

    public async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword(): Promise<void> {
        if (this.password) {
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword;
        }
    }
}

export default User
