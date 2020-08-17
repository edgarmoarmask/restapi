import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'profile'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    fullname: string;

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    ic_number: string;

    @Column({nullable: true})
    case: string;

    @Column({nullable: true})
    address: string;

    @Column({nullable: true})
    country_of_departure: string;

    @Column({nullable: true})
    date_of_birth: string;

    @Column({nullable: true})
    expiry_date: string;

    @Column({nullable: true})
    nationality: string;

    @Column({nullable: true})
    mrz_string_1: string;

    @Column({nullable: true})
    ic_type: string;

    @Column({nullable: true})
    gender: string;

}
