"use strict";
// process.env.NODE_ENV = process.env.NODE_ENV || "development";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var _ = require("lodash");
var development_1 = require("./development");
// import stagingConfig from "./staging";
// import productionConfig from "./production";
// import testConfig from "./test";
var envConfig = {
    development: development_1.default
    // staging: stagingConfig,
    // production: productionConfig,
    // test: testConfig
};
var common = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 1410,
    root: path.normalize(__dirname + "/../../.."),
    mongo: {
        options: {
            db: {}
        }
    },
    rollbarToken: "c40dd41c292340419923230eed1d0d61",
};
var config = _.merge(common, envConfig[common.env]);
exports.default = config;
//# sourceMappingURL=index.js.map