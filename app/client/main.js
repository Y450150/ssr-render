"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const vue_1 = __importDefault(require("vue"));
const App_vue_1 = __importDefault(require("../../client/App.vue"));
function createApp() {
    return new vue_1.default({
        render: h => h(App_vue_1.default)
    });
}
exports.createApp = createApp;
//# sourceMappingURL=main.js.map