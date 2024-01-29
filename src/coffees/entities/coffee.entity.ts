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
import { Drink } from '../../common/interfaces/drink.interface';
import { CoffeeType } from '../../common/enums/coffee-type.enum';

@Entity()
@ObjectType({ implements: () => Drink })
export class Coffee implements Drink {
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

  @Column({ nullable: true })
  type?: CoffeeType;
}
