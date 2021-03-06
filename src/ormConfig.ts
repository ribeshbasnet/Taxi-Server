import {ConnectionOptions} from "typeorm";


const connectionOptions: ConnectionOptions  = {
    type: "postgres",
    database: 'taxi',
    synchronize: true,
    logging: true,
    entities: [
        "entities/**/*.*"
    ],
    host: process.env.DB_ENDPOINT || "localhost",
    port: 5432,
    username:process.env.DB_USERNAME || "ribesh",
    password: process.env.DB_PASSWORD || "ribesh123"
};
export default connectionOptions;