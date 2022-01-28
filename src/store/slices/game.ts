import { createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

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

const options = { body: {}, method: 'GET' };

export const fetchData = createAsyncThunk(
    'game/fetchData',
    async (): Promise<GameState | null> => {
        const res = await apiFetch(`http://${process.env.REACT_APP_ADDRESS}:${process.env.REACT_APP_PORT}/`, options);
        
        return safelyTransform<GameState>(res, transformGameDataResponse);
    }
);

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            if (action.payload) {
                const {maxHealth, currentHealth, enemyHealth, lei, rank, rankScore, inventory, inventoryCount} = action.payload;

                state.maxHealth = maxHealth;
                state.currentHealth = currentHealth;
                state.enemyHealth = enemyHealth;
                state.lei = lei;
                state.rank = rank;
                state.rankScore = rankScore;
                state.inventoryCount = inventoryCount;
                state.inventory = inventory;
            }
        })
    }
});

export const selectGameData = (state: RootState): GameState => state.game;

export default gameSlice.reducer;
