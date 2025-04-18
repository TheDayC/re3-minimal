import { selectRE2RWeaponImage } from './RE2R';
import { selectRE3RWeaponImage } from './RE3R';

export function selectWeaponImage(weaponId: number, attachmentId: number): string {
    switch (import.meta.env.VITE_GAME) {
        case 'RE3R':
            return selectRE3RWeaponImage(weaponId, attachmentId);
        case 'RE2R':
            return selectRE2RWeaponImage(weaponId, attachmentId);
        default:
            return '';
    }
}
