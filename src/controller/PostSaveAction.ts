import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";


export async function postSaveAction(request: Request, response: Response) {

    const postRepository = getManager().getRepository(User);

    const newPost = postRepository.create(request.body);

    await postRepository.save(newPost);

    response.send(newPost);
}