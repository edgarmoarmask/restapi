import {postGetAllAction} from "./controller/PostGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import {postSaveAction} from "./controller/PostSaveAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/usersAll",
        method: "get",
        action: postGetAllAction
    },
    {
        path: "/user/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/submitpass",
        method: "post",
        action: postSaveAction
    }
];