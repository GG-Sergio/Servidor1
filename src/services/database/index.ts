import 'dotenv/config'
import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
    host: process.env.CHAT_AI_DB_HOST,
    user: process.env.CHAT_AI_DB_user,
    password: process.env.CHAT_AI_DB_pass,
    database: process.env.CHAT_AI_DB_NAME,
    port: Number(process.env.CHAT_AI_DB_PORT),
    waitForConnections: true,
})

export default connection;
    