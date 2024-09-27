import { games } from '../../data';

export async function load({ params }) {
    const gameId = parseInt(params.id);
    const game = games.find(g => g.id === gameId);

    if (!game) {
        return {
            status: 404,
            error: new Error('Game not found')
        };
    }

    return {
        game
    };
}