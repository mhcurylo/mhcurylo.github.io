"use strict";
exports.__esModule = true;
exports.createIndex = void 0;
var fs = require("fs");
var renderIndex = function (baseUrl) {
    return "<!doctype html>\n<html>\n  <head>\n    <title>StaTic</title>\n    <link rel=\"icon\" type=\"image/ico\" href=\"" + baseUrl + "/favicon.ico\"/>\n  </head>\n  <body>\n    <div style=\"margin-top: 100px; width: 100%; display: flex; align-items: center; flex-direction: column; justify-content: center;\">\n      <img src=\"" + baseUrl + "/favicon.ico\" alt=\"StaTic\" width=\"32\" height=\"32\"/>\n      <a style=\"display: inline-block; text-decoration: none;\" href=\"" + baseUrl + "/pvp/---------.html\" ><div style=\"width: 300px; text-align: center; margin-bottom: 10px; margin-top: 10px\">Player vs Player</div></a>\n      <a style=\"display: inline-block; text-decoration: none;\" href=\"" + baseUrl + "/ai/---------.html\"><div style=\"width: 300px; text-align: center; margin-bottom: 10px\">Player vs AI</div></a>\n    </div>\n  </body>\n</html>";
};
var createIndex = function (baseUrl, baseDir) {
    if (!fs.existsSync("" + baseDir)) {
        fs.mkdirSync("" + baseDir);
    }
    fs.copyFileSync("./resources/favicon.ico", baseDir + "/favicon.ico");
    fs.writeFileSync(baseDir + "/index.html", renderIndex(baseUrl));
};
exports.createIndex = createIndex;
//# sourceMappingURL=index.js.map