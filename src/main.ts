import { client } from "./client";
import user from "./user";

async function main() {
    await client.connect();

    await user.getUserByName("Rapunzel", client);
    await user.getUserByEmail("snowwhite@fairytale.com", client);

    await client.end();
}

main();
