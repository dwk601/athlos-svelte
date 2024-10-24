import type { PageServerLoad } from './$types';
import { users, groups, groupMembers, games, gameAttendees } from '../data';

export const load: PageServerLoad = async ({ params }) => {
  // For this example, we'll use the first user in the array
  const user = users[0];

  // Get user's groups
  const userGroups = groups.filter(group => 
    groupMembers.some(member => member.group_id === group.id && member.user_id === user.id)
  );

  // Get user's upcoming games
  const userGames = games.filter(game => 
    userGroups.some(group => group.id === game.group_id) &&
    game.date_time > new Date()
  ).sort((a, b) => a.date_time.getTime() - b.date_time.getTime());

  // Get user's game attendance
  const userAttendance = gameAttendees.filter(attendee => attendee.user_id === user.id);

  return {
    user,
    userGroups,
    userGames: userGames.slice(0, 5), // Return only the next 5 upcoming games
    userAttendance
  };
};
