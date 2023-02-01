import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const userRoutes = () => {
    const app = Router();

    app.get("/users", new UserController().list);
    return app;
};
