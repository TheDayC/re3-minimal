// Weapon ID 1 - G19Handgun
import G19Handgun from '@/images/RE3R/weapons/G19Handgun.png';
import G19Handgun1 from '@/images/RE3R/weapons/G19Handgun1.png';
import G19Handgun2 from '@/images/RE3R/weapons/G19Handgun2.png';
import G19Handgun3 from '@/images/RE3R/weapons/G19Handgun3.png';
import G19Handgun4 from '@/images/RE3R/weapons/G19Handgun4.png';
import G19Handgun5 from '@/images/RE3R/weapons/G19Handgun5.png';
import G19Handgun6 from '@/images/RE3R/weapons/G19Handgun6.png';
import G19Handgun7 from '@/images/RE3R/weapons/G19Handgun7.png';

// Weapon ID 2 - G18BurstHandgun
import G18BurstHandgun from '@/images/RE3R/weapons/G18BurstHandgun.png';

// Weapon ID 3 - G18Handgun
import G18Handgun from '@/images/RE3R/weapons/G18Handgun.png';

// Weapon ID 4 - SamuraiEdge
import SamuraiEdge from '@/images/RE3R/weapons/SamuraiEdge.png';

// Weapon ID 7 - InfiniteMUPHandgun
import InfiniteMUPHandgun from '@/images/RE3R/weapons/InfiniteMUPHandgun.png';

// Weapon ID 11 - InfiniteMUPHandgun
import M3Shotgun from '@/images/RE3R/weapons/M3Shotgun.png';
import M3Shotgun1 from '@/images/RE3R/weapons/M3Shotgun1.png';
import M3Shotgun2 from '@/images/RE3R/weapons/M3Shotgun2.png';
import M3Shotgun3 from '@/images/RE3R/weapons/M3Shotgun3.png';
import M3Shotgun4 from '@/images/RE3R/weapons/M3Shotgun4.png';
import M3Shotgun5 from '@/images/RE3R/weapons/M3Shotgun5.png';
import M3Shotgun6 from '@/images/RE3R/weapons/M3Shotgun6.png';
import M3Shotgun7 from '@/images/RE3R/weapons/M3Shotgun7.png';

// Weapon ID 21 - CQBRAssaultRifle
import CQBRAssaultRifle from '@/images/RE3R/weapons/CQBRAssaultRifle.png';
import CQBRAssaultRifle1 from '@/images/RE3R/weapons/CQBRAssaultRifle1.png';
import CQBRAssaultRifle2 from '@/images/RE3R/weapons/CQBRAssaultRifle2.png';
import CQBRAssaultRifle3 from '@/images/RE3R/weapons/CQBRAssaultRifle3.png';
import CQBRAssaultRifle4 from '@/images/RE3R/weapons/CQBRAssaultRifle4.png';
import CQBRAssaultRifle5 from '@/images/RE3R/weapons/CQBRAssaultRifle5.png';
import CQBRAssaultRifle6 from '@/images/RE3R/weapons/CQBRAssaultRifle6.png';
import CQBRAssaultRifle7 from '@/images/RE3R/weapons/CQBRAssaultRifle7.png';

// Weapon ID 22 - InfiniteCQBRAssaultRifle
import InfiniteCQBRAssaultRifle from '@/images/RE3R/weapons/InfiniteCQBRAssaultRifle.png';

// Weapon ID 31 - LightningHawk
import LightningHawk from '@/images/RE3R/weapons/LightningHawk.png';
import LightningHawk1 from '@/images/RE3R/weapons/LightningHawk1.png';

// Weapon ID 32 - RAIDEN
import RAIDEN from '@/images/RE3R/weapons/RAIDEN.png';

// Weapon ID 42 - MGLGrenadeLauncher
import MGLGrenadeLauncher from '@/images/RE3R/weapons/MGLGrenadeLauncher.png';

// Weapon ID 46 - CombatKnife
import CombatKnife from '@/images/RE3R/weapons/CombatKnife.png';

// Weapon ID 47 - CombatKnife
import SurvivalKnife from '@/images/RE3R/weapons/SurvivalKnife.png';

// Weapon ID 48 - HotDogger
import HotDogger from '@/images/RE3R/weapons/HotDogger.png';

// Weapon ID 49 - RocketLauncher
import RocketLauncher from '@/images/RE3R/weapons/RocketLauncher.png';

// Weapon ID 65 - HandGrenade
import HandGrenade from '@/images/RE3R/weapons/HandGrenade.png';

// Weapon ID 66 - HandGrenade
import FlashGrenade from '@/images/RE3R/weapons/FlashGrenade.png';

export function selectRE3RWeaponImage(weaponId: number, attachmentId: number): string {
    switch (weaponId) {
        case 1:
            return selectG19WithAttachmentImage(attachmentId);
        case 2:
            return G18BurstHandgun;
        case 3:
            return G18Handgun;
        case 4:
            return SamuraiEdge;
        case 7:
            return InfiniteMUPHandgun;
        case 11:
            return selectM3ShotgunWithAttachmentImage(attachmentId);
        case 21:
            return selectCQBRAssaultRifleWithAttachmentImage(attachmentId);
        case 22:
            return InfiniteCQBRAssaultRifle;
        case 31:
            return selectLightningHawkWithAttachmentImage(attachmentId);
        case 32:
            return RAIDEN;
        case 42:
            return MGLGrenadeLauncher;
        case 46:
            return CombatKnife;
        case 47:
            return SurvivalKnife;
        case 48:
            return HotDogger;
        case 49:
            return RocketLauncher;
        case 65:
            return HandGrenade;
        case 66:
            return FlashGrenade;
        default:
            return '';
    }
}

function selectG19WithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return G19Handgun1;
        case 2:
            return G19Handgun2;
        case 3:
            return G19Handgun3;
        case 4:
            return G19Handgun4;
        case 5:
            return G19Handgun5;
        case 6:
            return G19Handgun6;
        case 7:
            return G19Handgun7;
        default:
            return G19Handgun;
    }
}

function selectM3ShotgunWithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return M3Shotgun1;
        case 2:
            return M3Shotgun2;
        case 3:
            return M3Shotgun3;
        case 4:
            return M3Shotgun4;
        case 5:
            return M3Shotgun5;
        case 6:
            return M3Shotgun6;
        case 7:
            return M3Shotgun7;
        default:
            return M3Shotgun;
    }
}

function selectCQBRAssaultRifleWithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return CQBRAssaultRifle1;
        case 2:
            return CQBRAssaultRifle2;
        case 3:
            return CQBRAssaultRifle3;
        case 4:
            return CQBRAssaultRifle4;
        case 5:
            return CQBRAssaultRifle5;
        case 6:
            return CQBRAssaultRifle6;
        case 7:
            return CQBRAssaultRifle7;
        default:
            return CQBRAssaultRifle;
    }
}

function selectLightningHawkWithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return LightningHawk1;
        default:
            return LightningHawk;
    }
}
