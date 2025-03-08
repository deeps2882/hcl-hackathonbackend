/** @format */

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 255 })
  password!: string;

  @Column({
    type: "enum",
    enum: ["admin", "patient", "doctor"],
    default: "patient",
  })
  role!: "admin" | "patient";

  @Column({ type: "enum", enum: ["male", "female", "other"], nullable: true })
  sex?: "male" | "female" | "other";

  @Column({ type: "float", nullable: true })
  weight?: number;

  @Column({ type: "int", nullable: true })
  age?: number;

  @Column({ type: "text", nullable: true })
  allergy?: string;

  @Column({ type: "text", nullable: true })
  health_status?: string;
}
