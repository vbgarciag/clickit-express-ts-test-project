import { DataSource } from 'typeorm';

const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "password@123",
    database: "test_db",
    entities: ['src/database/entities/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
    migrationsTableName:  'migrations_typeorm',
});

export default PostgresDataSource;