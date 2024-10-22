import { error, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { games, gameAttendees, users } from '../../../../data';

export const load: PageServerLoad = async ({ params }) => {
    const game = games.find(g => g.id === params.gameId);
    
    if (!game) {
        throw error(404, 'Game not found');
    }

    const attendees = gameAttendees
        .filter(a => a.game_id === game.id)
        .map(a => {
            const user = users.find(u => u.id === a.user_id);
            return {
                ...a,
                user: user ? { id: user.id, name: user.name } : null
            };
        });

    return {
        game,
        attendees
    };
};

export const actions: Actions = {
    attendGame: async ({ params, request }) => {
        const game = games.find(g => g.id === params.gameId);
        if (!game) {
            return fail(404, { message: 'Game not found' });
        }

        const formData = await request.formData();
        const userId = formData.get('userId') as string;

        if (!userId) {
            return fail(400, { message: 'User ID is required' });
        }

        // Check if the game is in the past
        const now = new Date();
        const gameDate = new Date(game.date_time);
        if (gameDate < now) {
            return fail(400, { message: 'Cannot attend a past game' });
        }

        // Check if the user is already attending
        const existingAttendee = gameAttendees.find(a => a.game_id === game.id && a.user_id === userId);
        if (existingAttendee) {
            return fail(400, { message: 'User is already attending this game' });
        }

        // Add the user to the attendees list
        gameAttendees.push({
            game_id: game.id,
            user_id: userId,
            status: 'attending',
            checked_in: false,
            created_at: new Date(),
            updated_at: new Date()
        });

        console.log(`User ${userId} is now attending game ${game.id}`);

        return { success: true };
    },

    checkIn: async ({ params, request }) => {
        const game = games.find(g => g.id === params.gameId);
        if (!game) {
            return fail(404, { message: 'Game not found' });
        }

        const formData = await request.formData();
        const userId = formData.get('userId') as string;

        if (!userId) {
            return fail(400, { message: 'User ID is required' });
        }

        const attendee = gameAttendees.find(a => a.game_id === game.id && a.user_id === userId);
        if (!attendee) {
            return fail(400, { message: 'User is not attending this game' });
        }

        // Check if it's the game day
        const today = new Date();
        const gameDate = new Date(game.date_time);
        if (today.toDateString() !== gameDate.toDateString()) {
            return fail(400, { message: 'Check-in is only available on the day of the game' });
        }

        // Update the attendee's checked_in status
        attendee.checked_in = true;
        attendee.updated_at = new Date();

        console.log(`User ${userId} checked in for game ${game.id} at ${attendee.updated_at}`);

        return { success: true };
    }
};
