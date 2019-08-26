"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DubboModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const dubbo_provider_1 = require("./dubbo.provider");
let DubboModule = DubboModule_1 = class DubboModule {
    static forRoot(options) {
        const providers = dubbo_provider_1.createDubboProviders(options);
        return {
            module: DubboModule_1,
            providers,
            exports: providers,
        };
    }
    static forRootAsync(options) {
        const providers = dubbo_provider_1.createDubboAsyncProviders(options);
        return {
            module: DubboModule_1,
            imports: options.imports,
            providers,
            exports: providers,
        };
    }
};
DubboModule = DubboModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], DubboModule);
exports.DubboModule = DubboModule;
//# sourceMappingURL=dubbo.module.js.map