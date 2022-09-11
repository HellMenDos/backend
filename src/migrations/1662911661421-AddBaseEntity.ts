import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBaseEntity1662911661421 implements MigrationInterface {
    name = 'AddBaseEntity1662911661421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "verify" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-11T15:54:21.603Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-11T15:54:21.616Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-11 15:42:15.248'`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-11 15:42:15.234'`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "verify"`);
    }

}
