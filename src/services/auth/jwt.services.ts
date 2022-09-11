import { Injectable } from "@nestjs/common";
import { sign,verify } from 'jsonwebtoken';

const SECRET_TOKEN_ACCESS = 'access'
const SECRET_TOKEN_REFRESH = 'refresh'

@Injectable()
export class JwtServices {
    constructor() {}

    public signData(data: number) {
        
        return {
            access_token: sign({ data }, SECRET_TOKEN_ACCESS, { expiresIn: '1h' }),
            refresh_token: sign({ data }, SECRET_TOKEN_REFRESH, { expiresIn: '30d' }),
        }
    }

    public verifyData(data: string) {
        try {
            return verify(data,SECRET_TOKEN_ACCESS)
        }catch(error) {
            console.log('Error with token')
            return null
        }
    }

    public verifyDataRefresh(data: string) {
        console.log(data,'ddd')
        try {
            return verify(data,SECRET_TOKEN_REFRESH)
        }catch(error) {
            console.log('Error with token',error)
            return null
        }
    }
}