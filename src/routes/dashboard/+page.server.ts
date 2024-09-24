// Import the mock data from data.ts
import { users, groups, notifications, games } from '../data';

// Define the load function
export async function load() {
    // Assuming the first user is the logged-in user
    const user = users[0];

    // Filter games based on their type
    const pastGames = games.filter(game => game.type === 'past');
    const upcomingGames = games.filter(game => game.type === 'upcoming');

    // Filter notifications for the logged-in user
    const userNotifications = notifications.filter(n => n.userId === user.id);

    return {
        user,
        pastGames,
        upcomingGames,
        groups,
        notifications: userNotifications,
        unreadNotifications: userNotifications.length
    };
}