/** @format */

import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class PatientDoctorMaster {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (patient) => patient.id, {
    onDelete: "CASCADE",
  })
  patientId!: User;

  @ManyToOne(() => User, (doctor) => doctor.id, {
    onDelete: "CASCADE",
  })
  doctorId!: User;
}
