import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { NextAuthService } from './next-auth.service'
import { IncomingMessage } from 'http'

@Injectable()
export class NextAuthGuard implements CanActivate {
  constructor(private nextAuthService: NextAuthService) {}

  async canActivate(context: ExecutionContext) {
    const request: IncomingMessage = context.switchToHttp().getRequest()

    try {
      request['user'] = this.nextAuthService.decode(request)
      return true
    } catch {
      return false
    }
  }
}
