import { Router } from "express";
import { RealStateController } from "./controllers/RealStateController";
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

routes.post("/real_state", new RealStateController().store);
routes.get("/real_states", new RealStateController().index);
routes.get("/:id/real_state", new RealStateController().indexId);
routes.delete("/:id/real_state", new RealStateController().delete);
routes.put("/:id/real_state", new RealStateController().update);

export { routes };