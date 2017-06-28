"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./user.controller");
var routes = function (app) {
    app.get("/api/user", user_controller_1.default.getAll);
    // app.get("/api/user/:id", userController.getById);
};
exports.default = routes;
// export default controller; 
//# sourceMappingURL=user.routes.js.map