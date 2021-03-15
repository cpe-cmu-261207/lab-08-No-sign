"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var fs_1 = require("fs");
var app = express_1["default"]();
app.use(body_parser_1["default"].json());
//to post you must use bodyParser
app.get("/", function (req, res) {
    res.end(fs_1["default"].readFileSync("./instruction.html"));
});
//implement your api here
//follow instruction in http://localhost:8000/
var port = process.env.PORT || 8000;
app.listen(port, function () { return console.log("server started on port:" + port); });
