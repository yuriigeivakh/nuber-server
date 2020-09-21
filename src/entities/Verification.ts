import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EMAIL, PHONE, verificationTarget } from '../types/types';

@Entity()
class Verification extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({type: 'text', enum: [PHONE, EMAIL]}) target: verificationTarget;

    @Column({type: 'text'}) payload: string;

    @Column({type: 'text'}) key: string;

    @Column({type: 'boolean', default: false}) used: boolean;

    @CreateDateColumn() createdAt: string;

    @UpdateDateColumn() updatedAt: string;

    @BeforeInsert()
    private createKey(): void {
        if (this.target === PHONE) {
            this.key = Math.floor(Math.random() * 100000).toString();
        } else {
            this.key = Math.random().toString(36).substr(2);
        }
    }
}

export default Verification
