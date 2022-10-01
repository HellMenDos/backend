import {MigrationInterface, QueryRunner} from "typeorm";

export class Support1664193607355 implements MigrationInterface {
    name = 'Support1664193607355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "supports" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "describe" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "telegram" character varying NOT NULL, CONSTRAINT "PK_d8c2a7cbebc6494f00dda770105" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-26T12:00:07.561Z"'`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-26T12:00:07.591Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-26 01:26:11.758'`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-26 01:26:11.76'`);
        await queryRunner.query(`DROP TABLE "supports"`);
    }

}
