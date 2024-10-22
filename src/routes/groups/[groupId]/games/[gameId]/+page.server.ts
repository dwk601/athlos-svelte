import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
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
