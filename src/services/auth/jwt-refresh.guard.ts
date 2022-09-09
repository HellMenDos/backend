import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtServices } from './jwt.services';

@Injectable()
export class JwtRefreshGuard implements CanActivate {
  constructor(private jwt: JwtServices) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    const response = context.switchToHttp().getResponse()

    const token = request.headers['authorization'].split('Token')[1].trim()

    if(token) {
      const data = this.jwt.verifyDataRefresh(token.trim())

      if(data) {
        if(data.exp * 1000 > new Date().getTime()) {
          request.body['user'] = data.data
          return true;
        }else {
          throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'Token expired',
          }, 404);
        }
      }else {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'Invalid token',
        }, 403);
      }
    }else {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Needed token',
      }, 403);
    }
  }
}
