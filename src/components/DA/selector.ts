import { createSelector } from 'reselect';

import { selectGameData } from '../../store/slices/game';

const selector = createSelector([selectGameData], game => ({
    rank: game.rank,
    rankScore: game.rankScore
}));

export default selector;
