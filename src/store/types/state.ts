import { EnemyHealth, InventoryItem } from '../../types/game';

export interface GameState {
    maxHealth: number;
    currentHealth: number;
    enemyHealth: EnemyHealth[] | null;
    lei: number;
    rank: number;
    rankScore: number;
    inventoryCount: number;
    inventory: InventoryItem[] | null;
}
