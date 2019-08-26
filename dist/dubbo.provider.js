"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dubbo2_js_1 = require("dubbo2.js");
const dubbo_constant_1 = require("./dubbo.constant");
function createDubboProviders(dubboOpts) {
    return [
        {
            provide: dubbo_constant_1.DUBBO_MODULE_PROVIDER,
            useFactory: () => dubbo2_js_1.Dubbo.from(dubboOpts),
        },
    ];
}
exports.createDubboProviders = createDubboProviders;
function createDubboAsyncProviders(options) {
    return [
        {
            provide: dubbo_constant_1.DUBBO_MODULE_OPTIONS,
            useFactory: options.useFactory,
            inject: options.inject || [],
        },
        {
            provide: dubbo_constant_1.DUBBO_MODULE_PROVIDER,
            useFactory: (dubboOpts) => dubbo2_js_1.Dubbo.from(dubboOpts),
            inject: [dubbo_constant_1.DUBBO_MODULE_OPTIONS],
        },
    ];
}
exports.createDubboAsyncProviders = createDubboAsyncProviders;
//# sourceMappingURL=dubbo.provider.js.map