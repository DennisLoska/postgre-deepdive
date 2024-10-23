CREATE SEQUENCE comments_id_seq;
ALTER TABLE comments ALTER COLUMN id SET DEFAULT nextval('comments_id_seq');
SELECT setval('comments_id_seq', COALESCE((SELECT MAX(id) FROM comments), 1));
