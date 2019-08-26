import { Provider } from '@nestjs/common';
import { DubboModuleOptions, DubboModuleAsyncOptions } from './dubbo.interface';
export declare function createDubboProviders(dubboOpts: DubboModuleOptions): Provider[];
export declare function createDubboAsyncProviders(options: DubboModuleAsyncOptions): Provider[];
