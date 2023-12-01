import Database from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
  app.get("/api/modules", (req, res) => {
    const modules = Database.modules;
    res.json(modules);
  });
  app.get("/api/courses/:id/modules", async (req, res) => {
    const { id } = req.params;
    // const modules = Database.modules.filter((module) => module.course === id);
    const modules = await dao.findModulesForCourse(id);
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
  app.post("/api/courses/:cid/modules", async (req, res) => {
    // const newModule = {
    //   ...req.body,
    //   course: req.params.cid,
    //   _id: new Date().getTime().toString(),
    // };
    // Database.modules.unshift(newModule);

    const { cid } = req.params;
    const newModule = await dao.createModuleForCourse(cid, req.body);
    res.json(newModule);
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
