import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sortBy, slice } from 'lodash';

import type { RootState } from '..';
import { apiFetch } from '../../helpers/fetch';
import { safelyTransform } from '../../helpers/transform';
import { transformGameDataResponse } from '../../services/transformers/game';
import { GameState } from '../types/state';

const initialState: GameState = {
    maxHealth: 1000,
    currentHealth: 0,
    enemyHealth: null,
    lei: 0,
    rank: 0,
    rankScore: 0,
    inventoryCount: 0,
    inventory: []
};

const twoSlotIds = [7,11,21,22,32,42,49];

const options = { body: {}, method: 'GET' };

export const fetchData = createAsyncThunk('game/fetchData', async (): Promise<GameState | null> => {
    const res = await apiFetch(`http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT}/`, options);

    return safelyTransform<GameState>(res, transformGameDataResponse);
});

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            if (action.payload) {
                const { maxHealth, currentHealth, enemyHealth, lei, rank, rankScore, inventory, inventoryCount } = action.payload;

                const sortedInventory = slice(
                    sortBy(inventory, item => item.slotPosition),
                    0,
                    inventoryCount
                );

                state.maxHealth = maxHealth;
                state.currentHealth = currentHealth;
                state.enemyHealth = enemyHealth;
                state.lei = lei;
                state.rank = rank;
                state.rankScore = rankScore;
                state.inventoryCount = inventoryCount;
                state.inventory = sortedInventory.filter((inv, index) => {
                    if (index === 0) return true;

                    const previous = sortedInventory[index - 1];
                    const shouldRemove = previous.isWeapon && twoSlotIds.includes(previous.weaponID);
                    
                    if (shouldRemove) return false;

                    return true;
                });
            }
        });
    }
});

export const selectGameData = (state: RootState): GameState => state.game;

export default gameSlice.reducer;
