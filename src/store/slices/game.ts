import { sortBy, slice } from 'lodash';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '..';
import { apiFetch } from '../../helpers/fetch';
import { GameState } from '../types/state';
import { GameStateSchema } from '@/utils/schema';

const initialState: GameState = {
    maxHealth: 1000,
    currentHealth: 0,
    enemyHealth: null,
    rank: 0,
    rankScore: 0,
    inventoryCount: 0,
    inventory: null
};

export const twoSlotWeapons = [7, 11, 21, 22, 32, 42, 49];
export const twoSlotItems = [186];

export const fetchData = createAsyncThunk('game/fetchData', async (): Promise<GameState | null> => {
    const res = await apiFetch<any>(`http://${import.meta.env.VITE_ADDRESS}:${import.meta.env.VITE_PORT}/`, { body: null, method: 'GET' });

    const { data, success } = GameStateSchema.safeParse({
        maxHealth: res.PlayerManager.Health.MaxHP,
        currentHealth: res.PlayerManager.Health.CurrentHP,
        enemyHealth:
            res.Enemies.length > 0
                ? res.Enemies.map((enemy: any) => ({
                      CurrentHP: enemy.CurrentHP,
                      IsAlive: enemy.IsAlive,
                      MaximumHP: enemy.MaxHP,
                      Percentage: enemy.Percentage
                  }))
                : null,
        rank: res.RankManager.GameRank,
        rankScore: res.RankManager.RankPoint,
        inventoryCount: res.InventoryCount,
        inventory:
            res.Items.length > 0
                ? res.Items.map((item: any) => ({
                      attachmentId: item.WeaponParts,
                      isEmptySlot: item.IsEmptySlot,
                      isItem: item.IsItem,
                      isWeapon: item.IsWeapon,
                      itemID: item.ItemId,
                      quantity: item.Count,
                      slotPosition: item.SlotNo,
                      weaponID: item.WeaponId
                  }))
                : null
    });

    return success ? data : null;
});

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            if (action.payload) {
                const { maxHealth, currentHealth, enemyHealth, rank, rankScore, inventory, inventoryCount } = action.payload;

                const sortedInventory = slice(
                    sortBy(inventory, item => item.slotPosition),
                    0,
                    inventoryCount
                );

                state.maxHealth = maxHealth;
                state.currentHealth = currentHealth;
                state.enemyHealth = enemyHealth;
                state.rank = rank;
                state.rankScore = rankScore;
                state.inventoryCount = inventoryCount;
                state.inventory = sortedInventory.filter((inv, index) => {
                    if (index === 0) return true;

                    const previous = sortedInventory[index - 1];

                    if (previous.isWeapon && twoSlotWeapons.includes(previous.weaponID)) return false;

                    if (previous.isItem && twoSlotItems.includes(previous.itemID)) return false;

                    return true;
                });
            }
        });
    }
});

export const selectGameData = (state: RootState): GameState => state.game;

export default gameSlice.reducer;
