import { Client } from "pg";
import { insertComment } from "../sql/comment.queries";

export async function createComment(
    id: number,
    userId: number,
    value: string,
    client: Client,
) {
    const comment = await insertComment.run(
        { comment: { id, userId, value } },
        client,
    );
    console.log(comment);
}
