"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./user.service");
var controller = {
    getAll: function (req, res, next) {
        return user_service_1.default.getAll(function (err, users) {
            // if(err) { return handleError(res, err); }
            res.status(200).json(users);
        });
        // res.json([{name: "aaa"}]);
    },
};
exports.default = controller;
//# sourceMappingURL=user.controller.js.map