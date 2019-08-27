import { ModuleMetadata } from '@nestjs/common/interfaces';
import { IDubboProps } from 'dubbo2.js/es7/typings/types';

export type DubboModuleOptions = IDubboProps;

export interface DubboModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => Promise<DubboModuleOptions> | DubboModuleOptions;
  inject?: any[];
}
