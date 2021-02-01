"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const routes_1 = __importDefault(require("./routes"));
const app = new koa_1.default();
app.use(routes_1.default.routes()).use(routes_1.default.allowedMethods());
app.listen(3000, () => {
    console.log("服务端啦 http://127.0.0.1:3000");
});
//# sourceMappingURL=app.js.map