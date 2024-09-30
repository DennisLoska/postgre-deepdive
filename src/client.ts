import { Client } from "pg";

export const client = new Client({
    host: "localhost",
    user: "dennis",
    password: "roger_that",
    database: "pg_mastery",
});
