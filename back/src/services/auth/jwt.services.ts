import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { sign,verify } from 'jsonwebtoken';

const SECRET_TOKEN_ACCESS = 'access'
const SECRET_TOKEN_REFRESH = 'refresh'

@Injectable()
export class JwtServices {
    constructor() {}

    public signData(data: number) {
        
        return {
            access_token: sign({ data }, SECRET_TOKEN_ACCESS, { expiresIn: '1h' }),
            refresh_token: sign({ data }, SECRET_TOKEN_REFRESH, { expiresIn: '2d' }),
        }
    }

    public verifyData(data: string) {
        try {
            return verify(data,SECRET_TOKEN_ACCESS)
        }catch(error) {
            if (error.expiredAt) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Token expired',
                  }, 401);
            }else {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Invalid token',
                }, 403);
            }
        }
    }

    public verifyDataRefresh(data: string) {
        try {
            return verify(data,SECRET_TOKEN_REFRESH)
        }catch(error) {
            if (error.expiredAt) {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Token expired',
                  }, 401);
            }else {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Invalid token',
                }, 403);
            }
        }
    }
}