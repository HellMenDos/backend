import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SupportsServices } from '../../services/support/supports.services';
import { SupportsDto } from '../../services/support/supports.dto';

@ApiTags('supports')
@Controller('supports')
export class SupportsController {
    constructor(
        private support: SupportsServices
    ) {}

    @Post()
    public create(@Body() data: SupportsDto) {
        return this.support.create(data)
    }
}
