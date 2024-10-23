/* @name createUsersEmailIndex */
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
/* @name createUsersBirthdateIndex */
CREATE INDEX IF NOT EXISTS idx_users_birthdate ON users(birthdate);
/* @name createRolesUserIndex */
CREATE INDEX IF NOT EXISTS idx_roles_user_id ON roles(user_id);
/* @name createRolesPrivilegeIndex */
CREATE INDEX IF NOT EXISTS idx_roles_privilege ON roles(privilege);
/* @name createCommentsUserIndex */
CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id);
/* @name createCommentsTimestampIndex */
CREATE INDEX IF NOT EXISTS idx_comments_timestamp ON comments(timestamp);
/* @name createCommentsUserCompositeIndex */
CREATE INDEX IF NOT EXISTS idx_comments_user_id_id ON comments(user_id, id);

/* @name dropUsersEmailIndex */
DROP INDEX IF EXISTS idx_users_email;
/* @name dropUsersBirthdateIndex */
DROP INDEX IF EXISTS idx_users_birthdate;
/* @name dropRolesUserIndex */
DROP INDEX IF EXISTS idx_roles_user_id;
/* @name dropRolesPrivilegeIndex */
DROP INDEX IF EXISTS idx_roles_privilege;
/* @name dropCommentsUserIndex */
DROP INDEX IF EXISTS idx_comments_user_id;
/* @name dropCommentsTimestampIndex */
DROP INDEX IF EXISTS idx_comments_timestamp;
/* @name dropCommentsUserCompositeIndex */
DROP INDEX IF EXISTS idx_comments_user_id_id;
