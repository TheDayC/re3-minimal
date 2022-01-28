export interface EnemyHealth {
    CurrentHP: number;
    IsAlive: boolean;
    IsNaN: boolean;
    IsTrigger: boolean;
    MaximumHP: number;
    Percentage: number;
}

export interface InventoryItem {
    attachments: number;
    isEmptySlot: boolean;
    isItem: boolean;
    isWeapon: boolean;
    itemID: number;
    quantity: number;
    slotPosition: number;
    weaponID: number;
}
