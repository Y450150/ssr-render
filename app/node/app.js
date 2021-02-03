"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const vue_server_renderer_1 = require("vue-server-renderer");
const main_1 = require("../client/main");
const routes_1 = __importDefault(require("./routes"));
const app = new koa_1.default();
console.log(__dirname);
const renderer = vue_server_renderer_1.createRenderer({
    template: fs_1.readFileSync(path_1.default.join(__dirname, '../index.html'), "utf-8")
});
routes_1.default.get("/", ctx => {
    const app = main_1.createApp();
    renderer.renderToString(app, (err, html) => {
        ctx.res.end(html);
    });
});
app.use(routes_1.default.routes()).use(routes_1.default.allowedMethods());
app.listen(3000, () => {
    console.log("服务端啦 http://127.0.0.1:3000");
});
//# sourceMappingURL=app.js.map