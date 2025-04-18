import { createSelector } from '@reduxjs/toolkit';

import { selectGameData } from '../../store/slices/game';

const selector = createSelector([selectGameData], game => ({
    currentHealth: game.currentHealth,
    maxHealth: game.maxHealth
}));

export default selector;
