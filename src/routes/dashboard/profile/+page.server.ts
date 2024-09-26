import { users } from "../../data";
export async function load() {
    // Assuming the first user is the logged-in user
    const user = users[0];
    return { user };
}
