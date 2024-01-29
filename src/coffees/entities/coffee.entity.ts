import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  CreateDateColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@ObjectType()
@Entity()
export class Coffee {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors?: Flavor[];
  @CreateDateColumn()
  createdAt?: Date;
}
