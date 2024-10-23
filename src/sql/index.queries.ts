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


/** 'CreateCommentsUserCompositeIndex' parameters type */
export type ICreateCommentsUserCompositeIndexParams = void;

/** 'CreateCommentsUserCompositeIndex' return type */
export type ICreateCommentsUserCompositeIndexResult = void;

/** 'CreateCommentsUserCompositeIndex' query type */
export interface ICreateCommentsUserCompositeIndexQuery {
  params: ICreateCommentsUserCompositeIndexParams;
  result: ICreateCommentsUserCompositeIndexResult;
}

const createCommentsUserCompositeIndexIR: any = {"usedParamSet":{},"params":[],"statement":"CREATE INDEX IF NOT EXISTS idx_comments_user_id_id ON comments(user_id, id)"};

/**
 * Query generated from SQL:
 * ```
 * CREATE INDEX IF NOT EXISTS idx_comments_user_id_id ON comments(user_id, id)
 * ```
 */
export const createCommentsUserCompositeIndex = new PreparedQuery<ICreateCommentsUserCompositeIndexParams,ICreateCommentsUserCompositeIndexResult>(createCommentsUserCompositeIndexIR);


/** 'DropUsersEmailIndex' parameters type */
export type IDropUsersEmailIndexParams = void;

/** 'DropUsersEmailIndex' return type */
export type IDropUsersEmailIndexResult = void;

/** 'DropUsersEmailIndex' query type */
export interface IDropUsersEmailIndexQuery {
  params: IDropUsersEmailIndexParams;
  result: IDropUsersEmailIndexResult;
}

const dropUsersEmailIndexIR: any = {"usedParamSet":{},"params":[],"statement":"DROP INDEX IF EXISTS idx_users_email"};

/**
 * Query generated from SQL:
 * ```
 * DROP INDEX IF EXISTS idx_users_email
 * ```
 */
export const dropUsersEmailIndex = new PreparedQuery<IDropUsersEmailIndexParams,IDropUsersEmailIndexResult>(dropUsersEmailIndexIR);


/** 'DropUsersBirthdateIndex' parameters type */
export type IDropUsersBirthdateIndexParams = void;

/** 'DropUsersBirthdateIndex' return type */
export type IDropUsersBirthdateIndexResult = void;

/** 'DropUsersBirthdateIndex' query type */
export interface IDropUsersBirthdateIndexQuery {
  params: IDropUsersBirthdateIndexParams;
  result: IDropUsersBirthdateIndexResult;
}

const dropUsersBirthdateIndexIR: any = {"usedParamSet":{},"params":[],"statement":"DROP INDEX IF EXISTS idx_users_birthdate"};

/**
 * Query generated from SQL:
 * ```
 * DROP INDEX IF EXISTS idx_users_birthdate
 * ```
 */
export const dropUsersBirthdateIndex = new PreparedQuery<IDropUsersBirthdateIndexParams,IDropUsersBirthdateIndexResult>(dropUsersBirthdateIndexIR);


/** 'DropRolesUserIndex' parameters type */
export type IDropRolesUserIndexParams = void;

/** 'DropRolesUserIndex' return type */
export type IDropRolesUserIndexResult = void;

/** 'DropRolesUserIndex' query type */
export interface IDropRolesUserIndexQuery {
  params: IDropRolesUserIndexParams;
  result: IDropRolesUserIndexResult;
}

const dropRolesUserIndexIR: any = {"usedParamSet":{},"params":[],"statement":"DROP INDEX IF EXISTS idx_roles_user_id"};

/**
 * Query generated from SQL:
 * ```
 * DROP INDEX IF EXISTS idx_roles_user_id
 * ```
 */
export const dropRolesUserIndex = new PreparedQuery<IDropRolesUserIndexParams,IDropRolesUserIndexResult>(dropRolesUserIndexIR);


/** 'DropRolesPrivilegeIndex' parameters type */
export type IDropRolesPrivilegeIndexParams = void;

/** 'DropRolesPrivilegeIndex' return type */
export type IDropRolesPrivilegeIndexResult = void;

/** 'DropRolesPrivilegeIndex' query type */
export interface IDropRolesPrivilegeIndexQuery {
  params: IDropRolesPrivilegeIndexParams;
  result: IDropRolesPrivilegeIndexResult;
}

const dropRolesPrivilegeIndexIR: any = {"usedParamSet":{},"params":[],"statement":"DROP INDEX IF EXISTS idx_roles_privilege"};

/**
 * Query generated from SQL:
 * ```
 * DROP INDEX IF EXISTS idx_roles_privilege
 * ```
 */
export const dropRolesPrivilegeIndex = new PreparedQuery<IDropRolesPrivilegeIndexParams,IDropRolesPrivilegeIndexResult>(dropRolesPrivilegeIndexIR);


/** 'DropCommentsUserIndex' parameters type */
export type IDropCommentsUserIndexParams = void;

/** 'DropCommentsUserIndex' return type */
export type IDropCommentsUserIndexResult = void;

/** 'DropCommentsUserIndex' query type */
export interface IDropCommentsUserIndexQuery {
  params: IDropCommentsUserIndexParams;
  result: IDropCommentsUserIndexResult;
}

const dropCommentsUserIndexIR: any = {"usedParamSet":{},"params":[],"statement":"DROP INDEX IF EXISTS idx_comments_user_id"};

/**
 * Query generated from SQL:
 * ```
 * DROP INDEX IF EXISTS idx_comments_user_id
 * ```
 */
export const dropCommentsUserIndex = new PreparedQuery<IDropCommentsUserIndexParams,IDropCommentsUserIndexResult>(dropCommentsUserIndexIR);


/** 'DropCommentsTimestampIndex' parameters type */
export type IDropCommentsTimestampIndexParams = void;

/** 'DropCommentsTimestampIndex' return type */
export type IDropCommentsTimestampIndexResult = void;

/** 'DropCommentsTimestampIndex' query type */
export interface IDropCommentsTimestampIndexQuery {
  params: IDropCommentsTimestampIndexParams;
  result: IDropCommentsTimestampIndexResult;
}

const dropCommentsTimestampIndexIR: any = {"usedParamSet":{},"params":[],"statement":"DROP INDEX IF EXISTS idx_comments_timestamp"};

/**
 * Query generated from SQL:
 * ```
 * DROP INDEX IF EXISTS idx_comments_timestamp
 * ```
 */
export const dropCommentsTimestampIndex = new PreparedQuery<IDropCommentsTimestampIndexParams,IDropCommentsTimestampIndexResult>(dropCommentsTimestampIndexIR);


/** 'DropCommentsUserCompositeIndex' parameters type */
export type IDropCommentsUserCompositeIndexParams = void;

/** 'DropCommentsUserCompositeIndex' return type */
export type IDropCommentsUserCompositeIndexResult = void;

/** 'DropCommentsUserCompositeIndex' query type */
export interface IDropCommentsUserCompositeIndexQuery {
  params: IDropCommentsUserCompositeIndexParams;
  result: IDropCommentsUserCompositeIndexResult;
}

const dropCommentsUserCompositeIndexIR: any = {"usedParamSet":{},"params":[],"statement":"DROP INDEX IF EXISTS idx_comments_user_id_id"};

/**
 * Query generated from SQL:
 * ```
 * DROP INDEX IF EXISTS idx_comments_user_id_id
 * ```
 */
export const dropCommentsUserCompositeIndex = new PreparedQuery<IDropCommentsUserCompositeIndexParams,IDropCommentsUserCompositeIndexResult>(dropCommentsUserCompositeIndexIR);


