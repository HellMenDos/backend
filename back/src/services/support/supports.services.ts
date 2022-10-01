import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { SupportsEntity } from '../../entity/Support.entity';
import { SupportsDto } from "./supports.dto";

@Injectable()
export  class SupportsServices {
    constructor(
        @InjectRepository(SupportsEntity) 
        private support: Repository<SupportsEntity>,
    ) {}

    public async create(data: SupportsDto): Promise<SupportsEntity> {
        return this.support.save(data)
    }
}