import {MigrationInterface, QueryRunner} from "typeorm";

export class VerifyToken1663181227890 implements MigrationInterface {
    name = 'VerifyToken1663181227890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "verifyToken" character varying NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-14T18:47:08.138Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-14T18:47:08.180Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-11 15:54:21.616'`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-11 15:54:21.603'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verifyToken"`);
    }

}
