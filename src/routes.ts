import { Router } from "express";

import { RealStateController } from "./controllers/RealStateController";
import { ServiceController } from "./controllers/ServiceController";
import { StatusController } from "./controllers/StatusController";
import { SubServiceController } from "./controllers/SubServiceController";
import { TaskController } from "./controllers/TaskController";
import { TypeController } from "./controllers/TypeController";
import { UserController } from "./controllers/UserController";
import { WorkspaceController } from "./controllers/WorkspaceController";

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

routes.post("/sub_service", new SubServiceController().store);
routes.get("/sub_services", new SubServiceController().index);
routes.get("/:id/sub_service", new SubServiceController().indexId);
routes.delete("/:id/sub_service", new SubServiceController().delete);
routes.put("/:id/sub_service", new SubServiceController().update);

routes.post("/workspace", new WorkspaceController().store);
routes.get("/:id/workspace", new WorkspaceController().indexId);
routes.get("/workspaces/pendings", new WorkspaceController().indexPending);
routes.delete("/:id/workspace", new WorkspaceController().delete);
routes.put("/:id/workspace", new WorkspaceController().update);

routes.post("/task", new TaskController().store);
routes.get("/tasks", new TaskController().index);
routes.get("/:id/task", new TaskController().indexId);
routes.delete("/:id/task", new TaskController().delete);
routes.put("/:id/task", new TaskController().update);


export { routes };