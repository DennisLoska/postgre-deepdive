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
            email VARCHAR(100),
            birthdate TIMESTAMPTZ
        );
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'roles') THEN
        CREATE TABLE roles (
            id BIGINT PRIMARY KEY,
            name VARCHAR(100),
            privileges VARCHAR(100),
        );
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'comments') THEN
        CREATE TABLE comments (
            id BIGINT PRIMARY KEY,
            user_id BIGINT,
            value VARCHAR(1000),
            timestamp TIMESTAMPTZ,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
    END IF;
END $$;

INSERT INTO users (name, email) VALUES ('Rapunzel', 'rapunzel@hightower.com');
INSERT INTO users (name, email) VALUES ('Snow White', 'snowwhite@fairytale.com');
