import { DynamicModule } from '@nestjs/common';
import { DubboModuleAsyncOptions, DubboModuleOptions } from './dubbo.interface';
export declare class DubboModule {
    static forRoot(options: DubboModuleOptions): DynamicModule;
    static forRootAsync(options: DubboModuleAsyncOptions): DynamicModule;
}
