const Shark = require("../models/shark.model");
const SharkController = require("./../controllers/shark.controller");

module.exports = (app) => {
  app.get("/api/sharks", SharkController.getAll);
  app.get("/api/sharks/:id", SharkController.getOne);
  app.post("/api/sharks", SharkController.create);
  app.put("/api/sharks/:id", SharkController.update);
  app.delete("/api/sharks/:id", SharkController.delete);

  // USER
  app.post("/api/users", SharkController.createUser);
};
