"use strict";
exports.__esModule = true;
exports.renderHTML = void 0;
var Domain = require("./domain");
var renderField = function (s, v, i, l) {
    return "<a style=\"display: inline-block; text-decoration: none;\" href=\"" + l(s, i) + "\"/><div style=\"width: 100px; height: 100px; font-size: 34px; display: flex;\"><div style=\"margin: auto\">" + v + "</div></div></a>";
};
var renderResult = function (v) {
    return "<div id=\"\">" + (v == "-" ? "Draw" : "Winner: " + v) + "</div>";
};
var render = function (baseUrl, t, s, l) {
    return "<div style=\"margin-top: 100px; width: 100%; display: flex; align-items: center; flex-direction: column; justify-content: center;\"><img src=\"" + baseUrl + "/favicon.ico\" alt=\"StaTic\" width=\"32\" height=\"32\"/><div style=\"width: 300px; text-align: center; margin-bottom: 10px; margin-top: 10px;\">" + t + "</div><div style=\"width: 300px; display: block; text-align: center;\">" + s
        .map(function (v, i) { return renderField(s, v, i, l); })
        .join("") + "</div><div>" + (Domain.isFinished(s) ? renderResult(Domain.result(s)) : "") + "</div></div>";
};
var renderHTML = function (baseUrl, t, l) {
    return function (s) {
        return "<!doctype html>\n<html>\n  <head>\n    <title>StaTic</title>\n    <link rel=\"icon\" type=\"image/ico\" href=\"" + baseUrl + "/favicon.ico\"/>\n  </head>\n  <body>\n    " + render(baseUrl, t, s, l) + "\n  </body>\n</html>";
    };
};
exports.renderHTML = renderHTML;
//# sourceMappingURL=renderer.js.map