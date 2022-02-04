import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class CharacterPersistenceModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    name!: string;

    @Column()
    attack!: number;

    @Column()
    defense!: number;

    @Column()
    magik!: number;

    @Column()
    health!: number;

    @Column()
    skill!: number;
}
