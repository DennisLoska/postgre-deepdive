DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'pg_mastery') THEN
        CREATE DATABASE pg_mastery;
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users') THEN
        CREATE TABLE users (
            id BIGINT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100)
        );
    END IF;
END $$;

INSERT INTO users (name, email) VALUES ('Rapunzel', 'rapunzel@hightower.com');
INSERT INTO users (name, email) VALUES ('Snow White', 'snowwhite@fairytale.com');
