import { z } from 'zod';

export const EnemyHealthSchema = z.object({
    CurrentHP: z.number(),
    IsAlive: z.boolean(),
    MaximumHP: z.number(),
    Percentage: z.number()
});

export const InventoryItemSchema = z.object({
    attachmentId: z.number(),
    isEmptySlot: z.boolean(),
    isItem: z.boolean(),
    isWeapon: z.boolean(),
    itemID: z.number(),
    quantity: z.number(),
    slotPosition: z.number(),
    weaponID: z.number()
});

export const GameStateSchema = z.object({
    maxHealth: z.number().default(1200),
    currentHealth: z.number().default(1200),
    enemyHealth: z.array(EnemyHealthSchema).nullable().default(null),
    rank: z.number().default(5),
    rankScore: z.number().default(5500),
    inventoryCount: z.number().default(0),
    inventory: z.array(InventoryItemSchema).nullable().default(null)
});
