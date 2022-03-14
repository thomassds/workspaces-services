import { Router } from "express";

import { RealStateController } from "./controllers/RealStateController";
import { ServiceController } from "./controllers/ServiceController";
import { StatusController } from "./controllers/StatusController";
import { TypeController } from "./controllers/TypeController";
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

routes.post("/type", new TypeController().store);
routes.get("/types", new TypeController().index);
routes.get("/:id/type", new TypeController().indexId);
routes.delete("/:id/type", new TypeController().delete);
routes.put("/:id/type", new TypeController().update);

routes.post("/service", new ServiceController().store);
routes.get("/services", new ServiceController().index);
routes.get("/:id/service", new ServiceController().indexId);
routes.delete("/:id/service", new ServiceController().delete);
routes.put("/:id/service", new ServiceController().update);


export { routes };