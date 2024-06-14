"use strict";
exports.__esModule = true;
var ai_generator_1 = require("./ai-generator");
var pvp_generator_1 = require("./pvp-generator");
var index_1 = require("./index");
var _a = process.argv.slice(2), _b = _a[0], baseUrl = _b === void 0 ? "http://localhost:9000" : _b, _c = _a[1], directory = _c === void 0 ? "./dist" : _c;
index_1.createIndex(baseUrl, directory);
ai_generator_1.createAI(baseUrl, directory);
pvp_generator_1.createPvP(baseUrl, directory);
//# sourceMappingURL=generate.js.map