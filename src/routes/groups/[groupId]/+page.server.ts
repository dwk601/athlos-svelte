// routes/groups/[groupId]/+page.server.ts
import type { PageServerLoad } from './$types';
import { groups, groupMembers, users, games, gameAttendees, groupJoinRequests } from '../../data';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    const { groupId } = params;

    // Convert groupId to a number
    const groupIdNumber = Number(groupId);

    // Find the group by ID
    const group = groups.find((g) => g.id === groupIdNumber);

    if (!group) {
        // Throw a 404 error if the group doesn't exist
        throw error(404, 'Group not found');
    }

    // Fetch group members
    const members = groupMembers
        .filter((gm) => gm.group_id === groupIdNumber)
        .map((gm) => {
            const user = users.find((u) => u.id === gm.user_id);
            return {
                ...user,
                role: gm.role,
                joined_at: gm.joined_at
            };
        });

    // Assume currentUserId is obtained from session or authentication
    const currentUserId = users[0].id; // For example purposes

    // Check if the current user is the leader of the group
    const isLeader = groupMembers.some(
        (gm) => gm.group_id === groupIdNumber && gm.user_id === currentUserId && gm.role === 'leader'
    );

    let joinRequests: { id: string; user: { id: string; name: string; email: string; password: string; created_at: Date; updated_at: Date; } | undefined; requested_at: Date; }[] = [];

    if (isLeader) {
        // Fetch pending join requests for the group
        joinRequests = groupJoinRequests
            .filter((req) => req.group_id === groupIdNumber)
            .map((req) => {
                const user = users.find((u) => u.id === req.user_id);
                return {
                    id: req.id,
                    user,
                    requested_at: req.requested_at
                };
            });
    }

    // Fetch all games for the group and include attendance information
    const allGames = games
        .filter((game) => game.group_id === groupIdNumber)
        .map((game) => {
            const attendees = gameAttendees.filter((ga) => ga.game_id === game.id);
            return {
                ...game,
                date_time: game.date_time.toISOString(),
                attendees: attendees.length,
                attending: attendees.filter((a) => a.status === 'attending').length
            };
        })
        .sort((a, b) => new Date(a.date_time).getTime() - new Date(b.date_time).getTime());

    return {
        group,
        members,
        allGames,
        joinRequests
    };
};
