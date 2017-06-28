"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_routes_1 = require("./api/user/user.routes");
// import homeRoutes from "./api/home/home.routes";
// import adminRoutes from "./api/admin/admin.routes";
var allRoutes = function (app) {
    // API routes
    user_routes_1.default(app);
    // // server-side views
    // homeRoutes(app);
    // // client-side views
    // adminRoutes(app);
};
exports.default = allRoutes;
//# sourceMappingURL=routes.js.map