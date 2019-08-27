import { Provider } from '@nestjs/common';
import { Dubbo } from 'dubbo2.js';
import { DubboModuleOptions, DubboModuleAsyncOptions } from './dubbo.interface';
import { DUBBO_MODULE_PROVIDER, DUBBO_MODULE_OPTIONS } from './dubbo.constant';

export function createDubboProviders(dubboOpts: DubboModuleOptions): Provider[] {
  return [
    {
      provide: DUBBO_MODULE_PROVIDER,
      useFactory: async () => {
        const dubbo = Dubbo.from(dubboOpts);
        await dubbo.ready();
        return dubbo;
      },
    },
  ];
}

export function createDubboAsyncProviders(options: DubboModuleAsyncOptions): Provider[] {
  return [
    {
      provide: DUBBO_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    },
    {
      provide: DUBBO_MODULE_PROVIDER,
      useFactory: async (dubboOpts: DubboModuleOptions) => {
        const dubbo = Dubbo.from(dubboOpts);
        await dubbo.ready();
        return dubbo;
      },
      inject: [DUBBO_MODULE_OPTIONS],
    },
  ];
}
