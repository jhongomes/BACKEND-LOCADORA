import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Car } from "./Car";

@Entity("cars_images")
class CarImage {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: "car_id" })
    @ManyToOne(() => Car)
    @Column()
    car_id: string;

    @Column()
    image_name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }

}

export { CarImage }

function JOinsColumn() {
    throw new Error("Function not implemented.");
}
