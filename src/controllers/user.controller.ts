import { Request, Response } from "express";
import { UserDatabase } from "../database/user.database";
import { ServerError } from "../errors/server.error";

export class UserController {
    public list(req: Request, res: Response) {
        try {
            const { age } = req.query;
            const database = new UserDatabase();
            let users = database.list();
            if (age) {
                users = users.filter((user) => user.age === Number(age));
            }
            const result = users.map((user) => user.toJson());

            res.status(200).send({
                ok: true,
                message: "Users successfully listed",
                data: result,
            });
        } catch (error: any) {
            return ServerError.genericError(res, error);
        }
    }
}
