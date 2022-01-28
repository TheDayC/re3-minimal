import { createSelector } from 'reselect';

import { selectGameData } from '../../store/slices/game';

const selector = createSelector([selectGameData], game => ({
    enemies: game.enemyHealth ? game.enemyHealth.filter(e => e.IsAlive) : null
}));

export default selector;
