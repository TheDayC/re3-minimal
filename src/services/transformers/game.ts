import { safelyParse, parseAsNumber, parseAsEnemyHealth, parseAsBoolean, parseAsInventoryItem, parseAsArrayOfInventoryItems } from '../../helpers/parsers';
import { safelyTransform } from '../../helpers/transform';
import { isArrayOfInventoryItems } from '../../helpers/typeguards';
import { GameState } from '../../store/types/state';
import { InventoryItem } from '../../types/game';

export function transformGameDataResponse(res: unknown): GameState {
    return {
        maxHealth: safelyParse(res, 'Player.MaxHP', parseAsNumber, 1000),
        currentHealth: safelyParse(res, 'Player.CurrentHP', parseAsNumber, 0),
        enemyHealth: safelyParse(res, 'EnemyHealth', parseAsEnemyHealth, null),
        lei: safelyParse(res, 'Lei', parseAsNumber, 0),
        rank: safelyParse(res, 'RankManager.Rank', parseAsNumber, 0),
        rankScore: safelyParse(res, 'RankManager.RankScore', parseAsNumber, 0),
        inventoryCount: safelyParse(res, 'PlayerInventoryCount', parseAsNumber, 0),
        inventory: safelyTransform<InventoryItem[]>(safelyParse(res, 'PlayerInventory', parseAsArrayOfInventoryItems, null), transformInventory)
    };
}

export function transformInventory(data: InventoryItem[] | null): InventoryItem[] | null {
    if (data) {
        return data.map(item => ({
            attachments: safelyParse(item, 'Attachments', parseAsNumber, 0),
            isEmptySlot: safelyParse(item, 'IsEmptySlot', parseAsBoolean, false),
            isItem: safelyParse(item, 'IsItem', parseAsBoolean, false),
            isWeapon: safelyParse(item, 'IsWeapon', parseAsBoolean, false),
            itemID: safelyParse(item, 'ItemID', parseAsNumber, 0),
            quantity: safelyParse(item, 'Quantity', parseAsNumber, 0),
            slotPosition: safelyParse(item, 'SlotPosition', parseAsNumber, 0),
            weaponID: safelyParse(item, 'WeaponID', parseAsNumber, 0)
        }));
    }

    return null;
}
