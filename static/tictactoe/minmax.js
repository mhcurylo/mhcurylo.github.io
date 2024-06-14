"use strict";
exports.__esModule = true;
exports.chooseMove = exports.minmax = void 0;
// AI, good enough, enjoys longer games.
var Domain = require("./domain");
var memoed = new Map();
var minmax = function (s, p) {
    var str = Domain.stringify(s);
    if (memoed.has(str)) {
        return memoed.get(str);
    }
    if (Domain.isFinished(s)) {
        var r = Domain.result(s);
        var result_1 = r === "x" ? 10 : r === "o" ? -10 : 0;
        memoed.set(str, result_1);
        return result_1;
    }
    var futures = Domain.nextStates(s).map(function (_a) {
        var s = _a.s;
        return exports.minmax(s, p);
    });
    var result = Domain.player(s) === p
        ? Math.max.apply(null, futures) + 1
        : Math.min.apply(null, futures) + 1;
    memoed.set(str, result);
    return result;
};
exports.minmax = minmax;
var chooseMove = function (state) {
    var candidates = Domain.nextStates(state).map(function (_a) {
        var f = _a.f, s = _a.s;
        return ({
            f: f,
            evaluate: exports.minmax(s, Domain.player(state))
        });
    });
    candidates.sort(function (a, b) { return b.evaluate - a.evaluate; });
    return candidates.length > 0 ? candidates[0].f : null;
};
exports.chooseMove = chooseMove;
//# sourceMappingURL=minmax.js.map