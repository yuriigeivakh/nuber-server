import { ConnectionOptions } from 'typeorm';

const defaultConnectionOptions: ConnectionOptions = {
    database: 'nuber',
    synchronize: true,
    logging: true,
    entities: ['entities/**/*.*'],
    type: 'postgres',
    host: process.env.DB_ENDPOINT || 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME || 'yurii.heivakh',
    password: process.env.DB_PASSWORD || '',
}

export default defaultConnectionOptions;