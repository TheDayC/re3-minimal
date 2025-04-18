import { selectRE3RItemImage } from './RE3R';
import { selectRE2RItemImage } from './RE2R';

export function selectItemImage(itemId: number): string {
    switch (import.meta.env.VITE_GAME) {
        case 'RE3R':
            return selectRE3RItemImage(itemId);
        case 'RE2R':
            return selectRE2RItemImage(itemId);
        default:
            return '';
    }
}
