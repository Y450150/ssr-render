"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const user_1 = __importDefault(require("./router/user"));
const route = koa_router_1.default();
route.get('/', (ctx, next) => {
    ctx.body = "home";
});
route.use('/user', user_1.default.routes(), user_1.default.allowedMethods());
exports.default = route;
//# sourceMappingURL=routes.js.map