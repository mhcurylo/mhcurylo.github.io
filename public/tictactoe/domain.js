"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.stringify = exports.move = exports.isFinished = exports.result = exports.nextStates = exports.possibleMoves = exports.player = exports.initState = exports.playerFields = exports.fieldNumbers = void 0;
exports.fieldNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
exports.playerFields = ["x", "o"];
exports.initState = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
var player = function (s) {
    return s.filter(function (field) { return exports.playerFields.includes(field); }).length % 2 == 0 ? "o" : "x";
};
exports.player = player;
var isEmpty = function (s) {
    return function (p) {
        return s[p] == "-";
    };
};
var possibleMoves = function (s) {
    return exports.fieldNumbers.filter(isEmpty(s));
};
exports.possibleMoves = possibleMoves;
var nextStates = function (s) {
    return exports.possibleMoves(s)
        .map(function (f) { return ({ f: f, s: exports.move(s)(f) }); })
        .filter(function (_a) {
        var s = _a.s;
        return !(s === null);
    });
};
exports.nextStates = nextStates;
var boardFull = function (s) {
    return s.filter(function (v) { return exports.playerFields.includes(v); }).length == 9;
};
var result = function (s) {
    if (s[0] != "-" &&
        ((s[1] == s[0] && s[2] == s[0]) || (s[3] == s[0] && s[6] == s[0]))) {
        return s[0];
    }
    else if (s[4] != "-" &&
        ((s[4] == s[3] && s[3] == s[5]) ||
            (s[4] == s[1] && s[4] == s[7]) ||
            (s[0] == s[4] && s[4] == s[8]) ||
            (s[2] == s[4] && s[4] == s[6]))) {
        return s[4];
    }
    else if (s[8] != "-" &&
        ((s[8] == s[7] && s[8] == s[6]) || (s[8] == s[2] && s[8] == s[5]))) {
        return s[8];
    }
    else {
        return "-";
    }
};
exports.result = result;
var isFinished = function (s) {
    return exports.result(s) != "-" || boardFull(s);
};
exports.isFinished = isFinished;
var move = function (s) {
    return function (p) {
        if (!exports.isFinished(s) && isEmpty(s)(p)) {
            var r = __spreadArray([], s);
            r[p] = exports.player(s);
            return r;
        }
        else {
            return null;
        }
    };
};
exports.move = move;
var stringify = function (s) { return s.join(""); };
exports.stringify = stringify;
//# sourceMappingURL=domain.js.map