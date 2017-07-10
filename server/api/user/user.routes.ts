import userController from "./user.controller";
import * as path from "path";

let routes = function(app) {
    app.get("/api/user", userController.getAll);
    // app.get("/api/user/:id", userController.getById);
};

export default routes;

// export default controller;