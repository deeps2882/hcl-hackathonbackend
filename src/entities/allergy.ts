/** @format */

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Allergy {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;
}
