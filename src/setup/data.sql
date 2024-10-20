DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM users LIMIT 1) THEN
        COPY users FROM 'users.csv' CSV HEADER;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM comments LIMIT 1) THEN
        COPY comments FROM 'comments.csv' CSV HEADER;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM roles LIMIT 1) THEN
        COPY roles FROM 'roles.csv' CSV HEADER;
    END IF;
END $$;
