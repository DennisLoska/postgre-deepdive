import { Pool, Client } from "pg";

export const pool = new Pool({
    host: "localhost",
    user: "dennis",
    password: "roger_that",
    database: "pg_mastery",
    min: 0,
    max: 1000,
    idleTimeoutMillis: 50000,
    connectionTimeoutMillis: 50000,
}) as unknown as Client;

export const client = new Client({
    host: "localhost",
    user: "dennis",
    password: "roger_that",
    database: "pg_mastery",
});
