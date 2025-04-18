// Weapon ID 1 - Handgun_Matilda
import Matilda from '@/images/RE2R/weapons/Handgun_Matilda.png';
import Matilda1 from '@/images/RE2R/weapons/Handgun_Matilda1.png';
import Matilda2 from '@/images/RE2R/weapons/Handgun_Matilda2.png';
import Matilda3 from '@/images/RE2R/weapons/Handgun_Matilda3.png';
import Matilda4 from '@/images/RE2R/weapons/Handgun_Matilda4.png';
import Matilda5 from '@/images/RE2R/weapons/Handgun_Matilda5.png';
import Matilda6 from '@/images/RE2R/weapons/Handgun_Matilda6.png';
import Matilda7 from '@/images/RE2R/weapons/Handgun_Matilda7.png';

// Weapon ID 2 - M19
import M19 from '@/images/RE2R/weapons/Handgun_M19.png';

// Weapon ID 3 - JMB HP3
import JMBHP3 from '@/images/RE2R/weapons/Handgun_JMB_Hp3.png';
import JMBHP3_1 from '@/images/RE2R/weapons/Handgun_JMB_Hp3_1.png';
import JMBHP3_2 from '@/images/RE2R/weapons/Handgun_JMB_Hp3_2.png';
import JMBHP3_3 from '@/images/RE2R/weapons/Handgun_JMB_Hp3_3.png';

// Weapon ID 4 - QuickDraw
import QuickDraw from '@/images/RE2R/weapons/Handgun_Quickdraw_Army.png';

// Weapon ID 8 - BroomHc
import BroomHc from '@/images/RE2R/weapons/Handgun_BroomHc.png';

// Weapon ID 9 - SLS60
import SLS60_1 from '@/images/RE2R/weapons/Handgun_SLS601.png';
import SLS60 from '@/images/RE2R/weapons/Handgun_SLS60.png';

// Weapon ID 11 - W870
import W870 from '@/images/RE2R/weapons/Shotgun_W870.png';
import W870_1 from '@/images/RE2R/weapons/Shotgun_W8701.png';
import W870_2 from '@/images/RE2R/weapons/Shotgun_W8702.png';
import W870_3 from '@/images/RE2R/weapons/Shotgun_W8703.png';

// Weapon ID 21 - MQ11
import MQ11 from '@/images/RE2R/weapons/SMG_MQ11.png';
import MQ11_1 from '@/images/RE2R/weapons/SMG_MQ11_1.png';
import MQ11_2 from '@/images/RE2R/weapons/SMG_MQ11_2.png';
import MQ11_3 from '@/images/RE2R/weapons/SMG_MQ11_3.png';

// Weapon ID 23 - LE5
import LE5 from '@/images/RE2R/weapons/SMG_LE5_Infinite.png';

// Weapon ID 31 - LightningHawk
import LightningHawk from '@/images/RE2R/weapons/Handgun_LightningHawk.png';
import LightningHawk_1 from '@/images/RE2R/weapons/Handgun_LightningHawk1.png';
import LightningHawk_2 from '@/images/RE2R/weapons/Handgun_LightningHawk2.png';
import LightningHawk_3 from '@/images/RE2R/weapons/Handgun_LightningHawk3.png';

// Weapon ID 41 - EMF
import EMF from '@/images/RE2R/weapons/EMF_Visualizer.png';

// Weapon ID 42 - GM79
import GM79 from '@/images/RE2R/weapons/GrenadeLauncher_GM79.png';
import GM79_1 from '@/images/RE2R/weapons/GrenadeLauncher_GM791.png';

// Weapon ID 43 - ChemicalFlamethrower
import ChemicalFlamethrower from '@/images/RE2R/weapons/ChemicalFlamethrower.png';
import ChemicalFlamethrower_1 from '@/images/RE2R/weapons/ChemicalFlamethrower2.png';

// Weapon ID 44 - SparkShot
import SparkShot from '@/images/RE2R/weapons/SparkShot.png';
import SparkShot_1 from '@/images/RE2R/weapons/SparkShot1.png';

// Weapon ID 45 - ATM4
import ATM4 from '@/images/RE2R/weapons/ATM4.png';

// Weapon ID 46 - CombatKnife
import CombatKnife from '@/images/RE2R/weapons/CombatKnife.png';

// Weapon ID 47 - CombatKnife_Infinite
import CombatKnife_Infinite from '@/images/RE2R/weapons/CombatKnife_Infinite.png';

// Weapon ID 49 - AntiTankRocketLauncher
import AntiTankRocketLauncher from '@/images/RE2R/weapons/AntiTankRocketLauncher.png';

// Weapon ID 50 - Minigun
import Minigun from '@/images/RE2R/weapons/Minigun.png';

// Weapon ID 65 - HandGrenade
import HandGrenade from '@/images/RE2R/weapons/HandGrenade.png';

// Weapon ID 66 - FlashGrenade
import FlashGrenade from '@/images/RE2R/weapons/FlashGrenade.png';

// Weapon ID 82 - SamuraiEdge
import SamuraiEdge from '@/images/RE2R/weapons/Handgun_SamuraiEdge_Infinite.png';

// Weapon ID 83 - SamuraiEdge_Chris
import SamuraiEdge_Chris from '@/images/RE2R/weapons/Handgun_SamuraiEdge_ChrisRedfield.png';

// Weapon ID 84 - SamuraiEdge_Jill
import SamuraiEdge_Jill from '@/images/RE2R/weapons/Handgun_SamuraiEdge_JillValentine.png';

// Weapon ID 85 - SamuraiEdge_Wesker
import SamuraiEdge_Wesker from '@/images/RE2R/weapons/Handgun_SamuraiEdge_AlbertWesker.png';

export function selectRE2RWeaponImage(weaponId: number, attachmentId: number): string {
    switch (weaponId) {
        case 1:
            return selectMatildaWithAttachmentImage(attachmentId);
        case 2:
            return M19;
        case 3:
            return selectJMBHP3WithAttachmentImage(attachmentId);
        case 4:
            return QuickDraw;
        case 7:
            return JMBHP3; // Should be the MUP but no icon exists.
        case 8:
            return BroomHc;
        case 9:
            return selectSLS60WithAttachmentImage(attachmentId);
        case 11:
            return selectW870WithAttachmentImage(attachmentId);
        case 21:
            return selectMQ11WithAttachmentImage(attachmentId);
        case 23:
            return LE5;
        case 31:
            return selectLightningHawkWithAttachmentImage(attachmentId);
        case 41:
            return EMF;
        case 42:
            return selectGM79WithAttachmentImage(attachmentId);
        case 43:
            return selectChemicalFlamethrowerWithAttachmentImage(attachmentId);
        case 44:
            return selectSparkShotWithAttachmentImage(attachmentId);
        case 45:
        case 222:
            return ATM4;
        case 46:
            return CombatKnife;
        case 47:
            return CombatKnife_Infinite;
        case 49:
        case 242:
            return AntiTankRocketLauncher;
        case 50:
        case 252:
            return Minigun;
        case 65:
            return HandGrenade;
        case 66:
            return FlashGrenade;
        case 82:
            return SamuraiEdge;
        case 83:
            return SamuraiEdge_Chris;
        case 84:
            return SamuraiEdge_Jill;
        case 85:
            return SamuraiEdge_Wesker;
        case 85:
            return SamuraiEdge_Wesker;
        default:
            return '';
    }
}

function selectMatildaWithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return Matilda1;
        case 2:
            return Matilda2;
        case 3:
            return Matilda3;
        case 4:
            return Matilda4;
        case 5:
            return Matilda5;
        case 6:
            return Matilda6;
        case 7:
            return Matilda7;
        default:
            return Matilda;
    }
}

function selectJMBHP3WithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return JMBHP3_1;
        case 2:
            return JMBHP3_2;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            return JMBHP3_3;
        default:
            return JMBHP3;
    }
}

function selectSLS60WithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 6:
            return SLS60_1;
        case 2:
        default:
            return SLS60;
    }
}

function selectW870WithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return W870_1;
        case 2:
            return W870_2;
        case 3:
            return W870_3;
        default:
            return W870;
    }
}

function selectMQ11WithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return MQ11_1;
        case 2:
            return MQ11_2;
        case 3:
            return MQ11_3;
        default:
            return MQ11;
    }
}

function selectLightningHawkWithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
            return LightningHawk_1;
        case 2:
            return LightningHawk_2;
        case 3:
            return LightningHawk_3;
        default:
            return LightningHawk;
    }
}

function selectGM79WithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
        case 2:
            return GM79_1;
        default:
            return GM79;
    }
}

function selectChemicalFlamethrowerWithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
        case 2:
            return ChemicalFlamethrower_1;
        default:
            return ChemicalFlamethrower;
    }
}

function selectSparkShotWithAttachmentImage(attachmentId: number): string {
    switch (attachmentId) {
        case 1:
        case 2:
            return SparkShot_1;
        default:
            return SparkShot;
    }
}
