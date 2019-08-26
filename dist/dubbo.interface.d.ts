import { ModuleMetadata } from '@nestjs/common/interfaces';
import { IDubboProps } from 'dubbo2.js/es7/types';
export declare type DubboModuleOptions = IDubboProps;
export interface DubboModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory: (...args: any[]) => Promise<DubboModuleOptions> | DubboModuleOptions;
    inject?: any[];
}
