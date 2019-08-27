"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dubbo2_js_1 = require("dubbo2.js");
const dubbo_constant_1 = require("./dubbo.constant");
function createDubboProviders(dubboOpts) {
    return [
        {
            provide: dubbo_constant_1.DUBBO_MODULE_PROVIDER,
            useFactory: async () => {
                const dubbo = dubbo2_js_1.Dubbo.from(dubboOpts);
                await dubbo.ready();
                return dubbo;
            },
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
            useFactory: async (dubboOpts) => {
                const dubbo = dubbo2_js_1.Dubbo.from(dubboOpts);
                await dubbo.ready();
                return dubbo;
            },
            inject: [dubbo_constant_1.DUBBO_MODULE_OPTIONS],
        },
    ];
}
exports.createDubboAsyncProviders = createDubboAsyncProviders;
//# sourceMappingURL=dubbo.provider.js.map