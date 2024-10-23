/** Types generated for queries found in "src/sql/comment.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'InsertComment' parameters type */
export interface IInsertCommentParams {
  comment: {
    id: NumberOrString | null | void,
    userId: NumberOrString | null | void,
    value: string | null | void
  };
}

/** 'InsertComment' return type */
export type IInsertCommentResult = void;

/** 'InsertComment' query type */
export interface IInsertCommentQuery {
  params: IInsertCommentParams;
  result: IInsertCommentResult;
}

const insertCommentIR: any = {"usedParamSet":{"comment":true},"params":[{"name":"comment","required":false,"transform":{"type":"pick_tuple","keys":[{"name":"id","required":false},{"name":"userId","required":false},{"name":"value","required":false}]},"locs":[{"a":50,"b":57}]}],"statement":"INSERT INTO comments (id, user_id, value ) VALUES :comment"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO comments (id, user_id, value ) VALUES :comment
 * ```
 */
export const insertComment = new PreparedQuery<IInsertCommentParams,IInsertCommentResult>(insertCommentIR);


