import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBaseEntity1662909526721 implements MigrationInterface {
    name = 'AddBaseEntity1662909526721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-11T15:18:46.936Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-11T15:18:46.976Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-09 12:35:51.575'`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-09 12:35:51.577'`);
    }

}
