import { DynamicModule, Global, Module } from '@nestjs/common';
import { DubboModuleAsyncOptions, DubboModuleOptions } from './dubbo.interface';
import { createDubboAsyncProviders, createDubboProviders } from './dubbo.provider';

@Global()
@Module({})
export class DubboModule {
  public static forRoot(options: DubboModuleOptions): DynamicModule {
    const providers = createDubboProviders(options);

    return {
      module: DubboModule,
      providers,
      exports: providers,
    };
  }

  public static forRootAsync(options: DubboModuleAsyncOptions): DynamicModule {
    const providers = createDubboAsyncProviders(options);

    return {
      module: DubboModule,
      imports: options.imports,
      providers,
      exports: providers,
    };
  }
}
