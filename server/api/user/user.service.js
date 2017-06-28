"use strict";
// import { mongoService } from "../../util/mongo.service";
Object.defineProperty(exports, "__esModule", { value: true });
var collection = "users";
var service = {
    getAll: function (next) {
        // mongoService.getDb(function (err, db) {
        //     // if (err) { return next(err, null); }
        //     db.collection(collection).find().toArray(function(err2, docs) {
        //         next(null, docs);
        next(null, [{ name: "user1" }]);
        //     });
        // });
    },
};
exports.default = service;
//# sourceMappingURL=user.service.js.map