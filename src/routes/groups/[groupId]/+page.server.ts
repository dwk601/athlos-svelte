// routes/groups/[groupId]/+page.server.ts
import type { PageServerLoad } from './$types';
import { groups, groupMembers, users, games } from '../../data';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  const { groupId } = params;

  // Find the group by ID
  const group = groups.find((g) => g.id === groupId);

  if (!group) {
    // Throw a 404 error if the group doesn't exist
    throw error(404, 'Group not found');
  }

  // Fetch group members
  const members = groupMembers
    .filter((gm) => gm.group_id === groupId)
    .map((gm) => {
      const user = users.find((u) => u.id === gm.user_id);
      return {
        ...user,
        role: gm.role,
        joined_at: gm.joined_at,
      };
    });

  // Fetch upcoming games for the group
  const upcomingGames = games
    .filter((game) => game.group_id === groupId)
    .map((game) => ({
      ...game,
      date_time: game.date_time.toISOString(), // Convert Date to ISO string
    }));

  return {
    group,
    members,
    upcomingGames,
  };
};
