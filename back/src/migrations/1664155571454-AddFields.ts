import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFields1664155571454 implements MigrationInterface {
    name = 'AddFields1664155571454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "tech" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "lang" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-26T01:26:11.758Z"'`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-26T01:26:11.760Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-25 11:52:54.906'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-25 11:52:54.94'`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "lang"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "tech"`);
    }

}
