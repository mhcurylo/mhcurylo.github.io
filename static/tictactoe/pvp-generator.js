"use strict";
exports.__esModule = true;
exports.createPvP = void 0;
var Domain = require("./domain");
var fs = require("fs");
var renderer_1 = require("./renderer");
var createPvP = function (baseUrl, baseDir) {
    var traversed = new Set();
    var linkMapper = function (s, i) {
        var nextState = Domain.move(s)(i);
        return baseUrl + "/pvp/" + Domain.stringify(nextState ? nextState : s) + ".html";
    };
    var render = renderer_1.renderHTML(baseUrl, "Player vs Player", linkMapper);
    if (!fs.existsSync(baseDir + "/pvp")) {
        fs.mkdirSync(baseDir + "/pvp");
    }
    var traverse = function (s) {
        var str = Domain.stringify(s);
        if (!traversed.has(str)) {
            traversed.add(str);
            fs.writeFileSync(baseDir + "/pvp/" + str + ".html", render(s));
            Domain.nextStates(s).forEach(function (_a) {
                var s = _a.s;
                return traverse(s);
            });
        }
    };
    traverse(Domain.initState);
};
exports.createPvP = createPvP;
//# sourceMappingURL=pvp-generator.js.map