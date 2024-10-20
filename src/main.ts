import { client } from "./client";
import user from "./queries/user";

async function main() {
    await client.connect();

    console.time();
    // await user.getUserByName("Rapunzel", client);
    // await user.getUserByEmail("snowwhite@fairytale.com", client);

    // const users = await user.getUsersByYearOfBirth(2000, client);
    // console.log(users);

    const usersWithComments = await user.getUsersWithComments(9, client);
    console.log(usersWithComments);

    await client.end();
    console.timeEnd();
}

main();
