import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeField1664106774703 implements MigrationInterface {
    name = 'ChangeField1664106774703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favourite" DROP CONSTRAINT "FK_a2e9dd9a1fd0c2d95b3325c6467"`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-25T11:52:54.906Z"'`);
        await queryRunner.query(`ALTER TABLE "favourite" DROP COLUMN "questionId"`);
        await queryRunner.query(`ALTER TABLE "favourite" ADD "questionId" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-25T11:52:54.940Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "questionId" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "questionId" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-18 09:46:18.26'`);
        await queryRunner.query(`ALTER TABLE "favourite" DROP COLUMN "questionId"`);
        await queryRunner.query(`ALTER TABLE "favourite" ADD "questionId" integer`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-18 09:46:18.226'`);
        await queryRunner.query(`ALTER TABLE "favourite" ADD CONSTRAINT "FK_a2e9dd9a1fd0c2d95b3325c6467" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
