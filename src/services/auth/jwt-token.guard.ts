import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtServices } from './jwt.services';

@Injectable()
export class JwtTokenGuard implements CanActivate {
  constructor(private jwt: JwtServices) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = request.headers['authorization'].split('Token')[1].trim()

    if(token) {
      const data = this.jwt.verifyData(token.trim())

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
