import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

export async function postGetAllAction(req: Request, res: Response) {

    const postRepository = getManager().getRepository(User);
    
    const Users = await postRepository.find();

    res.send(Users);
}