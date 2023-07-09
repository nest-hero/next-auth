import { Module, Provider } from '@nestjs/common'
import { NextAuthGuard } from './next-auth.guard'
import { NextAuthService } from './next-auth.service'
import { NextAuthModuleConfig } from './type/config'
import { NEXT_AUTH_MODULE_CONFIG } from './next-auth.constant'

const defaultConfig: NextAuthModuleConfig = {
  secret: '',
  cookieName: 'next-auth.session-token',
}

@Module({
  providers: [],
})
export class NextAuthModule {
  static forRoot(config: NextAuthModuleConfig) {
    const provider: Provider = {
      provide: NEXT_AUTH_MODULE_CONFIG,
      useValue: { ...defaultConfig, config },
    }

    return {
      global: true,
      module: NextAuthModule,
      providers: [NextAuthGuard, NextAuthService, provider],
      exports: [NextAuthGuard, NextAuthService],
    }
  }
}
