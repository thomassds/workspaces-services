import { Router } from "express";
import { StatusController } from "./controllers/StatusController";
import { UserController } from "./controllers/UserController";

const routes = Router();

routes.post("/status", new StatusController().store);
routes.get("/:id/status", new StatusController().indexId);
routes.get("/status", new StatusController().index);
routes.delete("/:id/status", new StatusController().delete);
routes.put("/:id/status", new StatusController().update);

routes.post("/user", new UserController().store);
routes.get("/users", new UserController().index);
routes.get("/:id/user", new UserController().indexId);
routes.delete("/:id/user", new UserController().delete);
routes.put("/:id/user", new UserController().update);

export { routes };