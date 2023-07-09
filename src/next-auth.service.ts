import { Inject, Injectable } from '@nestjs/common'
import { NEXT_AUTH_MODULE_CONFIG } from './next-auth.constant'
import { NextAuthModuleConfig } from './type/config'
import { verify } from 'jsonwebtoken'
import { IncomingMessage } from 'http'
import { parseCookie } from './util/cookie'

@Injectable()
export class NextAuthService {
  constructor(
    @Inject(NEXT_AUTH_MODULE_CONFIG) private config: NextAuthModuleConfig,
  ) {}

  decode(request: IncomingMessage) {
    const cookies = parseCookie(request.headers['cookie'])
    const token = cookies[this.config.cookieName]

    return verify(token, this.config.secret)
  }
}
