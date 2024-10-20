/** Types generated for queries found in "src/sql/index.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'CreateUsersEmailIndex' parameters type */
export type ICreateUsersEmailIndexParams = void;

/** 'CreateUsersEmailIndex' return type */
export type ICreateUsersEmailIndexResult = void;

/** 'CreateUsersEmailIndex' query type */
export interface ICreateUsersEmailIndexQuery {
  params: ICreateUsersEmailIndexParams;
  result: ICreateUsersEmailIndexResult;
}

const createUsersEmailIndexIR: any = {"usedParamSet":{},"params":[],"statement":"CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)"};

/**
 * Query generated from SQL:
 * ```
 * CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
 * ```
 */
export const createUsersEmailIndex = new PreparedQuery<ICreateUsersEmailIndexParams,ICreateUsersEmailIndexResult>(createUsersEmailIndexIR);


/** 'CreateUsersBirthdateIndex' parameters type */
export type ICreateUsersBirthdateIndexParams = void;

/** 'CreateUsersBirthdateIndex' return type */
export type ICreateUsersBirthdateIndexResult = void;

/** 'CreateUsersBirthdateIndex' query type */
export interface ICreateUsersBirthdateIndexQuery {
  params: ICreateUsersBirthdateIndexParams;
  result: ICreateUsersBirthdateIndexResult;
}

const createUsersBirthdateIndexIR: any = {"usedParamSet":{},"params":[],"statement":"CREATE INDEX IF NOT EXISTS idx_users_birthdate ON users(birthdate)"};

/**
 * Query generated from SQL:
 * ```
 * CREATE INDEX IF NOT EXISTS idx_users_birthdate ON users(birthdate)
 * ```
 */
export const createUsersBirthdateIndex = new PreparedQuery<ICreateUsersBirthdateIndexParams,ICreateUsersBirthdateIndexResult>(createUsersBirthdateIndexIR);


/** 'CreateRolesUserIndex' parameters type */
export type ICreateRolesUserIndexParams = void;

/** 'CreateRolesUserIndex' return type */
export type ICreateRolesUserIndexResult = void;

/** 'CreateRolesUserIndex' query type */
export interface ICreateRolesUserIndexQuery {
  params: ICreateRolesUserIndexParams;
  result: ICreateRolesUserIndexResult;
}

const createRolesUserIndexIR: any = {"usedParamSet":{},"params":[],"statement":"CREATE INDEX IF NOT EXISTS idx_roles_user_id ON roles(user_id)"};

/**
 * Query generated from SQL:
 * ```
 * CREATE INDEX IF NOT EXISTS idx_roles_user_id ON roles(user_id)
 * ```
 */
export const createRolesUserIndex = new PreparedQuery<ICreateRolesUserIndexParams,ICreateRolesUserIndexResult>(createRolesUserIndexIR);


/** 'CreateRolesPrivilegeIndex' parameters type */
export type ICreateRolesPrivilegeIndexParams = void;

/** 'CreateRolesPrivilegeIndex' return type */
export type ICreateRolesPrivilegeIndexResult = void;

/** 'CreateRolesPrivilegeIndex' query type */
export interface ICreateRolesPrivilegeIndexQuery {
  params: ICreateRolesPrivilegeIndexParams;
  result: ICreateRolesPrivilegeIndexResult;
}

const createRolesPrivilegeIndexIR: any = {"usedParamSet":{},"params":[],"statement":"CREATE INDEX IF NOT EXISTS idx_roles_privilege ON roles(privilege)"};

/**
 * Query generated from SQL:
 * ```
 * CREATE INDEX IF NOT EXISTS idx_roles_privilege ON roles(privilege)
 * ```
 */
export const createRolesPrivilegeIndex = new PreparedQuery<ICreateRolesPrivilegeIndexParams,ICreateRolesPrivilegeIndexResult>(createRolesPrivilegeIndexIR);


/** 'CreateCommentsUserIndex' parameters type */
export type ICreateCommentsUserIndexParams = void;

/** 'CreateCommentsUserIndex' return type */
export type ICreateCommentsUserIndexResult = void;

/** 'CreateCommentsUserIndex' query type */
export interface ICreateCommentsUserIndexQuery {
  params: ICreateCommentsUserIndexParams;
  result: ICreateCommentsUserIndexResult;
}

const createCommentsUserIndexIR: any = {"usedParamSet":{},"params":[],"statement":"CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id)"};

/**
 * Query generated from SQL:
 * ```
 * CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id)
 * ```
 */
export const createCommentsUserIndex = new PreparedQuery<ICreateCommentsUserIndexParams,ICreateCommentsUserIndexResult>(createCommentsUserIndexIR);


/** 'CreateCommentsTimestampIndex' parameters type */
export type ICreateCommentsTimestampIndexParams = void;

/** 'CreateCommentsTimestampIndex' return type */
export type ICreateCommentsTimestampIndexResult = void;

/** 'CreateCommentsTimestampIndex' query type */
export interface ICreateCommentsTimestampIndexQuery {
  params: ICreateCommentsTimestampIndexParams;
  result: ICreateCommentsTimestampIndexResult;
}

const createCommentsTimestampIndexIR: any = {"usedParamSet":{},"params":[],"statement":"CREATE INDEX IF NOT EXISTS idx_comments_timestamp ON comments(timestamp)"};

/**
 * Query generated from SQL:
 * ```
 * CREATE INDEX IF NOT EXISTS idx_comments_timestamp ON comments(timestamp)
 * ```
 */
export const createCommentsTimestampIndex = new PreparedQuery<ICreateCommentsTimestampIndexParams,ICreateCommentsTimestampIndexResult>(createCommentsTimestampIndexIR);


