/** Types generated for queries found in "src/sql/user.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

export type NumberOrString = number | string;

/** 'FindUserByName' parameters type */
export interface IFindUserByNameParams {
  name: string;
}

/** 'FindUserByName' return type */
export interface IFindUserByNameResult {
  birthdate: Date | null;
  email: string | null;
  id: string;
  name: string | null;
}

/** 'FindUserByName' query type */
export interface IFindUserByNameQuery {
  params: IFindUserByNameParams;
  result: IFindUserByNameResult;
}

const findUserByNameIR: any = {"usedParamSet":{"name":true},"params":[{"name":"name","required":true,"transform":{"type":"scalar"},"locs":[{"a":33,"b":38}]}],"statement":"SELECT * FROM users WHERE name = :name!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE name = :name!
 * ```
 */
export const findUserByName = new PreparedQuery<IFindUserByNameParams,IFindUserByNameResult>(findUserByNameIR);


/** 'FindUserByEmail' parameters type */
export interface IFindUserByEmailParams {
  email: string;
}

/** 'FindUserByEmail' return type */
export interface IFindUserByEmailResult {
  birthdate: Date | null;
  email: string | null;
  id: string;
  name: string | null;
}

/** 'FindUserByEmail' query type */
export interface IFindUserByEmailQuery {
  params: IFindUserByEmailParams;
  result: IFindUserByEmailResult;
}

const findUserByEmailIR: any = {"usedParamSet":{"email":true},"params":[{"name":"email","required":true,"transform":{"type":"scalar"},"locs":[{"a":34,"b":40}]}],"statement":"SELECT * FROM users WHERE email = :email!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE email = :email!
 * ```
 */
export const findUserByEmail = new PreparedQuery<IFindUserByEmailParams,IFindUserByEmailResult>(findUserByEmailIR);


/** 'FindUsersByBirthdate' parameters type */
export interface IFindUsersByBirthdateParams {
  birthdate?: DateOrString | null | void;
}

/** 'FindUsersByBirthdate' return type */
export interface IFindUsersByBirthdateResult {
  birthdate: Date | null;
  name: string | null;
}

/** 'FindUsersByBirthdate' query type */
export interface IFindUsersByBirthdateQuery {
  params: IFindUsersByBirthdateParams;
  result: IFindUsersByBirthdateResult;
}

const findUsersByBirthdateIR: any = {"usedParamSet":{"birthdate":true},"params":[{"name":"birthdate","required":false,"transform":{"type":"scalar"},"locs":[{"a":69,"b":78}]}],"statement":"SELECT name,birthdate FROM users WHERE date_trunc('day',birthdate) = :birthdate"};

/**
 * Query generated from SQL:
 * ```
 * SELECT name,birthdate FROM users WHERE date_trunc('day',birthdate) = :birthdate
 * ```
 */
export const findUsersByBirthdate = new PreparedQuery<IFindUsersByBirthdateParams,IFindUsersByBirthdateResult>(findUsersByBirthdateIR);


/** 'FindUsersByYearOfBirth' parameters type */
export interface IFindUsersByYearOfBirthParams {
  year?: NumberOrString | null | void;
}

/** 'FindUsersByYearOfBirth' return type */
export interface IFindUsersByYearOfBirthResult {
  birthdate: Date | null;
  name: string | null;
}

/** 'FindUsersByYearOfBirth' query type */
export interface IFindUsersByYearOfBirthQuery {
  params: IFindUsersByYearOfBirthParams;
  result: IFindUsersByYearOfBirthResult;
}

const findUsersByYearOfBirthIR: any = {"usedParamSet":{"year":true},"params":[{"name":"year","required":false,"transform":{"type":"scalar"},"locs":[{"a":70,"b":74}]}],"statement":"SELECT name,birthdate FROM users WHERE EXTRACT(YEAR FROM birthdate) = :year"};

/**
 * Query generated from SQL:
 * ```
 * SELECT name,birthdate FROM users WHERE EXTRACT(YEAR FROM birthdate) = :year
 * ```
 */
export const findUsersByYearOfBirth = new PreparedQuery<IFindUsersByYearOfBirthParams,IFindUsersByYearOfBirthResult>(findUsersByYearOfBirthIR);


