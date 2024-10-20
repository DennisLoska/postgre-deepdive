import { client } from "./client";
import user from "./user";

async function main() {
    await client.connect();

    // await user.getUserByName("Rapunzel", client);
    // await user.getUserByEmail("snowwhite@fairytale.com", client);

    const users = await user.getUsersByYearOfBirth(2000, client);
    console.log(users);

    await client.end();
}

main();
