import { Client } from "pg";

export const client = new Client({
    host: "localhost",
    user: "dennisloska",
    password: "roger_that",
    database: "pg_mastery",
});
