import { Client } from "pg";
import { insertComment } from "../sql/comment.queries";

export async function createComment(
    userId: number,
    value: string,
    client: Client,
) {
    return insertComment.run({ comment: { userId, value } }, client);
}
