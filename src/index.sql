-- for fast lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
-- for queries involving date ranges
CREATE INDEX IF NOT EXISTS idx_users_birthdate ON users(birthdate);
-- for fast joins with the users table
CREATE INDEX IF NOT EXISTS idx_roles_user_id ON roles(user_id);
-- for fast lookups
CREATE INDEX IF NOT EXISTS idx_roles_privilege ON roles(privilege);
-- for fast joins with the users table
CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id);
-- for queries involving date ranges
CREATE INDEX IF NOT EXISTS idx_comments_timestamp ON comments(timestamp);
