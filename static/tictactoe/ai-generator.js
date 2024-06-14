"use strict";
exports.__esModule = true;
exports.createAI = void 0;
var Domain = require("./domain");
var Minmax = require("./minmax");
var renderer_1 = require("./renderer");
var fs = require("fs");
var nextState = function (f, s) {
    var pmove = Domain.move(s)(f);
    if (!pmove)
        return s;
    var choice = Minmax.chooseMove(pmove);
    if (choice === null)
        return pmove;
    var aimove = Domain.move(pmove)(choice);
    return aimove || pmove;
};
var createAI = function (baseUrl, baseDir) {
    var traversed = new Set();
    var linkMapper = function (s, i) {
        return baseUrl + "/ai/" + Domain.stringify(nextState(i, s)) + ".html";
    };
    var render = renderer_1.renderHTML(baseUrl, "Player vs AI", linkMapper);
    if (!fs.existsSync(baseDir + "/ai")) {
        fs.mkdirSync(baseDir + "/ai");
    }
    var traverse = function (s) {
        var str = Domain.stringify(s);
        if (!traversed.has(str)) {
            traversed.add(str);
            fs.writeFileSync(baseDir + "/ai/" + str + ".html", render(s));
            Domain.possibleMoves(s).forEach(function (m) { return traverse(nextState(m, s)); });
        }
    };
    traverse(Domain.initState);
};
exports.createAI = createAI;
//# sourceMappingURL=ai-generator.js.map