import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBaseEntity1662909938126 implements MigrationInterface {
    name = 'AddBaseEntity1662909938126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-11T15:25:38.305Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-11T15:25:38.318Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-11 15:18:46.976'`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-11 15:18:46.936'`);
    }

}
