import { users, games, chats } from "../../data";

export async function load() {
    // Assuming the first user is the logged-in user
    const user = users[0];

    // Filter games based on their type
    const upcomingGames = games.filter(game => game.type === 'upcoming');

    // Get the chat messages for the user's group
    const userGroupChat = chats.find(chat => chat.groupId === user.groupId)?.messages.map(message => ({
        ...message,
        userId: users.find(u => u.firstName === message.sender)?.id
    })) || [];

    // Get the group members for the user's group
    const groupMembers = users.filter(u => u.groupId === user.groupId);

    return {
        user,
        upcomingGames,
        messages: userGroupChat,
        groupMembers
    };
}