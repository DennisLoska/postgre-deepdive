/** Types generated for queries found in "src/queries/user.sql" */
import { PreparedQuery } from "@pgtyped/runtime";

/** 'FindUserByName' parameters type */
export interface IFindUserByNameParams {
    name: string;
}

/** 'FindUserByName' return type */
export interface IFindUserByNameResult {
    email: string | null;
    id: number;
    name: string | null;
}

/** 'FindUserByName' query type */
export interface IFindUserByNameQuery {
    params: IFindUserByNameParams;
    result: IFindUserByNameResult;
}

const findUserByNameIR: any = {
    usedParamSet: { name: true },
    params: [
        {
            name: "name",
            required: true,
            transform: { type: "scalar" },
            locs: [{ a: 33, b: 38 }],
        },
    ],
    statement: "SELECT * FROM users WHERE name = :name!",
};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM users WHERE name = :name!
 * ```
 */
export const findUserByName = new PreparedQuery<
    IFindUserByNameParams,
    IFindUserByNameResult
>(findUserByNameIR);

/** 'FindUserByEmail' parameters type */
export interface IFindUserByEmailParams {
    email: string;
}

/** 'FindUserByEmail' return type */
export interface IFindUserByEmailResult {
    email: string | null;
    id: number;
    name: string | null;
}

/** 'FindUserByEmail' query type */
export interface IFindUserByEmailQuery {
    params: IFindUserByEmailParams;
    result: IFindUserByEmailResult;
}

const findUserByEmailIR: any = {
    usedParamSet: { email: true },
    params: [
        {
            name: "email",
            required: true,
            transform: { type: "scalar" },
            locs: [{ a: 37, b: 43 }],
        },
    ],
    statement: "SELECT *    FROM users WHERE email = :email!",
};

/**
 * Query generated from SQL:
 * ```
 * SELECT *    FROM users WHERE email = :email!
 * ```
 */
export const findUserByEmail = new PreparedQuery<
    IFindUserByEmailParams,
    IFindUserByEmailResult
>(findUserByEmailIR);
