"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const route = koa_router_1.default();
route.get('/', (ctx, next) => {
    ctx.body = "USER";
});
exports.default = route;
//# sourceMappingURL=user.js.map