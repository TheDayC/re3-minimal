import { EnemyHealth, InventoryItem } from '../types/game';

export function isString(candidate: unknown): candidate is string {
    return typeof candidate === 'string';
}

export function isNumber(candidate: unknown): candidate is number {
    return typeof candidate === 'number';
}

export function isBoolean(candidate: unknown): candidate is boolean {
    return typeof candidate === 'boolean';
}

export function isArray(candidate: unknown): candidate is unknown[] {
    return Array.isArray(candidate);
}

export function isNotNullOrUndefined<T>(candidate: unknown): candidate is T {
    return candidate !== undefined && candidate !== null;
}

export function isEnemyHealth(candidate: unknown): candidate is EnemyHealth[] {
    return Array.isArray(candidate) && typeof candidate[0] === 'object' && 'CurrentHP' in candidate[0];
}

export function isInventoryItem(candidate: unknown): candidate is InventoryItem {
    return isNotNullOrUndefined<object>(candidate) && 'SlotPosition' in candidate;
}

export function isArrayOfInventoryItems(candidate: unknown): candidate is InventoryItem[] {
    return Array.isArray(candidate) && typeof candidate[0] === 'object' && 'SlotPosition' in candidate[0];
}
