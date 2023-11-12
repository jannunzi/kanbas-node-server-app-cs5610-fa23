import Database from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesForCourse(cid);
    res.json(modules);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = await dao.createModule(cid, req.body);
    res.json(newModule);
  });

  app.get("/api/modules", async (req, res) => {
    const modules = await dao.findAllModules(); //Database.modules;
    res.json(modules);
  });
  app.get("/api/modules/:id", (req, res) => {
    const { id } = req.params;
    const module = Database.modules.find((module) => module._id === id);
    if (!module) {
      res.status(404).send("Module not found");
      return;
    }
    res.json(module);
  });
  app.delete("/api/modules/:id", (req, res) => {
    const { id } = req.params;
    const index = Database.modules.findIndex((module) => module._id === id);
    if (index === -1) {
      res.status(404).send("Module not found");
      return;
    }
    Database.modules.splice(index, 1);
    res.json(204);
  });
  app.put("/api/modules/:id", (req, res) => {
    const { id } = req.params;
    const index = Database.modules.findIndex((module) => module._id === id);
    if (index === -1) {
      res.status(404).send("Module not found");
      return;
    }
    Database.modules[index] = {
      ...Database.modules[index],
      ...req.body,
    };
    res.json(200);
  });
}
export default ModuleRoutes;
