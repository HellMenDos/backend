import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFields1663494378014 implements MigrationInterface {
    name = 'AddFields1663494378014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_8db2a234357898ee18a16f5d409"`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-18T09:46:18.226Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-18T09:46:18.260Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "questionId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "questionId" character varying NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "questionId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "questionId" integer`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-14 18:52:52.851'`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-14 18:52:52.826'`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_8db2a234357898ee18a16f5d409" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
