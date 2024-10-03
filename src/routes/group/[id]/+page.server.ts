import { users, games } from "../../data";

export async function load() {
    // Assuming the first user is the logged-in user
    const user = users[0];

    // Get the group members for the user's group
    const groupMembers = users.filter(u => u.groupId === user.groupId);

    // Filter upcoming games for the user's group
    const upcomingGames = games.filter(game => 
        game.type === 'upcoming' && game.attenders.some(attender => attender.groupId === user.groupId)
    );

    return {
        user,
        upcomingGames,
        groupMembers
    };
}