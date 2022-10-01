import {MigrationInterface, QueryRunner} from "typeorm";

export class VerifyToken1663181572650 implements MigrationInterface {
    name = 'VerifyToken1663181572650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '"2022-09-14T18:52:52.826Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "verifyToken" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '"2022-09-14T18:52:52.851Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "date" SET DEFAULT '2022-09-14 18:47:08.18'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "verifyToken" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "favourite" ALTER COLUMN "date" SET DEFAULT '2022-09-14 18:47:08.138'`);
    }

}
