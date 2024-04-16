import * as dao from "./dao.js";
function ModuleRoutes(app) {
    app.delete("/api/modules/:mid", async (req, res) => {
      const { mid } = req.params;
      await dao.deleteModuleById(mid);
    // db.modules = db.modules.filter((m) => m._id !== mid);
    res.sendStatus(200);
    });

    app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    await dao.createModule(newModule);
    res.send(newModule);
    });
    
    app.put("/api/modules/:mid", async (req, res) => {
      const { mid } = req.params;
      await dao.updateModuleById(mid, req.body);
    res.sendStatus(204);
    });

    app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModuleByCourse(cid);
    res.send(modules);
    });
}
export default ModuleRoutes;