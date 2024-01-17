import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Transaction {
	@PrimaryGeneratedColumn({ name: 'transaction_id' })
	id: number;

	@Column()
	title: string;

	@Column({ nullable: true })
	type: string;

	@ManyToOne(() => User, (user) => user.transactions)
	user: User;

	@ManyToOne(() => Category, (category) => category.transactions, {
		onDelete: 'SET NULL',
	})
	category: Category;

	@Column()
	amount: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
