import { Router } from "express";
import { StatusController } from "./controllers/StatusController";

const routes = Router();

routes.post("/status", new StatusController().store);
routes.get("/:id/status", new StatusController().indexId);
routes.get("/status", new StatusController().index);
routes.delete("/:id/status", new StatusController().delete);
routes.put("/:id/status", new StatusController().update);


export { routes };