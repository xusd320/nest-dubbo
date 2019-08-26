import { Provider } from '@nestjs/common';
import { Dubbo } from 'dubbo2.js';
import { DubboModuleOptions, DubboModuleAsyncOptions } from './dubbo.interface';
import { DUBBO_MODULE_PROVIDER, DUBBO_MODULE_OPTIONS } from './dubbo.constant';

export function createDubboProviders(dubboOpts: DubboModuleOptions): Provider[] {
  return [
    {
      provide: DUBBO_MODULE_PROVIDER,
      useFactory: () => Dubbo.from(dubboOpts),
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
      useFactory: (dubboOpts: DubboModuleOptions) => Dubbo.from(dubboOpts),
      inject: [DUBBO_MODULE_OPTIONS],
    },
  ];
}
