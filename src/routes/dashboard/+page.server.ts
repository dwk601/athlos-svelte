import { users, groups, games, groupMembers, gameAttendees } from '../data';

export const load = async () => {
	// Assume the current user is users[0]
	const currentUser = users[0];

	// Get groups the user is a member of
	const userGroupMemberships = groupMembers.filter((member) => member.user_id === currentUser.id);
	const userGroups = groups.filter((group) =>
		userGroupMemberships.some((member) => member.group_id === group.id)
	);

	// Get game attendances for the user
	const userGameAttendances = gameAttendees.filter(
		(attendance) => attendance.user_id === currentUser.id && attendance.status === 'attending'
	);

	// Separate previous and upcoming games
	const now = new Date();
	const previousGames = games.filter((game) =>
		userGameAttendances.some((attendance) => attendance.game_id === game.id && game.date_time < now)
	);
	const upcomingGames = games.filter((game) =>
		userGameAttendances.some(
			(attendance) => attendance.game_id === game.id && game.date_time >= now
		)
	);

	return {
		user: currentUser,
		groups: userGroups,
		previousGames,
		upcomingGames
	};
};
