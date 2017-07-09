import userController from "./user.controller";
import * as path from "path";

let routes = function(app) {
    app.get("/api/user", userController.getAll);
    // app.get("/api/user/:id", userController.getById);

    // todo move this route
    var file = path.join(__dirname, "/../../../client") + '/index.html';
    app.get('/authenticated/*', function(req, res) {res.sendFile(file);}); 

};

export default routes;

// export default controller;