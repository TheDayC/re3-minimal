import { createSelector } from 'reselect';

import { selectGameData } from '../../store/slices/game';

const selector = createSelector([selectGameData], game => ({
    inventory: game.inventory,
    inventoryCount: game.inventoryCount
}));

export default selector;
