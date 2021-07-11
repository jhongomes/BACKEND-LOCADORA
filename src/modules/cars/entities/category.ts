

import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuidv4} from 'uuid';

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }

}
export { Category };