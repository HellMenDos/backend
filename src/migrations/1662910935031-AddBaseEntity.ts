import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBaseEntity1662910935031 implements MigrationInterface {
    name = 'AddBaseEntity1662910935031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "verify" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-11T15:42:15.234Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-11T15:42:15.248Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-11 15:25:38.318'`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-11 15:25:38.305'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verify"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
    }
    

}
