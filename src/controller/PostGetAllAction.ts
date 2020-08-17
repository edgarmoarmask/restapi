import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

export async function postGetAllAction(req: Request, res: Response) {

    const postRepository = getManager().getRepository(User);
    const user = new User();
    
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.ic_number = req.body.ic_number;
    user.expiry_date = req.body.expiry_date;
    user.country_of_departure = req.body.country_of_departure;
    user.case = req.body.d_case;
    user.address = req.body.d_address;
    user.date_of_birth = req.body.date_of_birth;
    user.nationality = req.body.nationality;
    user.mrz_string_1 = req.body.mrz_string_1;
    user.ic_type = req.body.ic_type;
    user.gender = req.body.gender;

    await postRepository.save(user);

    console.log("Saved a new user with id: " + user.id);
    const Users = await postRepository.find();

    res.send("Saved a new user with id: " + user.id);
}