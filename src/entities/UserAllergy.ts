/** @format */

import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "./user"; // Assuming User entity is already defined
import { Allergy } from "./allergy"; // Assuming Allergy entity is already defined

@Entity()
export class UserAllergy {
  @PrimaryGeneratedColumn()
  user_allergy_id!: number;

  @ManyToOne(() => Allergy, (allergy) => allergy.id, {
    onDelete: "CASCADE",
  })
  allergy!: Allergy;

  @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE" })
  userId!: User;

  @Column({ type: "varchar", length: 255 })
  resolution!: string;

  @Column({ type: "date" })
  resolution_date!: Date;

  @Column({ type: "varchar", length: 255 })
  medication!: string;
}
