import FirstAidSpray from '../images/items/FirstAidSpray.png';
import GreenHerb from '../images/items/GreenHerb.png';
import RedHerb from '../images/items/RedHerb.png';
import MixedHerbsGG from '../images/items/MixedHerbsGG.png';
import MixedHerbsGR from '../images/items/MixedHerbsGR.png';
import MixedHerbsGGG from '../images/items/MixedHerbsGGG.png';
import GreenHerb2 from '../images/items/GreenHerb2.png';
import RedHerb2 from '../images/items/RedHerb2.png';
import HandgunAmmo from '../images/items/HandgunAmmo.png';
import ShotgunAmmo from '../images/items/ShotgunAmmo.png';
import AssaultRifleAmmo from '../images/items/AssaultRifleAmmo.png';
import MAGAmmo from '../images/items/MAGAmmo.png';
import MineRounds from '../images/items/MineRounds.png';
import ExplosiveRounds from '../images/items/ExplosiveRounds.png';
import AcidRounds from '../images/items/AcidRounds.png';
import FlameRounds from '../images/items/FlameRounds.png';
import Gunpowder from '../images/items/Gunpowder.png';
import HighGradeGunpowder from '../images/items/HighGradeGunpowder.png';
import ExplosiveA from '../images/items/ExplosiveA.png';
import ExplosiveB from '../images/items/ExplosiveB.png';
import ModeratorHandgun from '../images/items/ModeratorHandgun.png';
import DotSightHandgun from '../images/items/DotSightHandgun.png';
import ExtendedMagazineHandgun from '../images/items/ExtendedMagazineHandgun.png';
import SemiAutoBarrel from '../images/items/SemiAutoBarrel.png';
import TacticalStockShotgun from '../images/items/TacticalStockShotgun.png';
import ShellHolderShotgun from '../images/items/ShellHolderShotgun.png';
import ScopeAssaultRifle from '../images/items/ScopeAssaultRifle.png';
import DualMagazineAssaultRifle from '../images/items/DualMagazineAssaultRifle.png';
import TacticalGripAssaultRifle from '../images/items/TacticalGripAssaultRifle.png';
import ExBarrelMAG from '../images/items/ExBarrelMAG.png';
import AudiocassetteTape from '../images/items/AudiocassetteTape.png';
import LockPick from '../images/items/LockPick.png';
import BoltCutters from '../images/items/BoltCutters.png';
import Battery from '../images/items/Battery.png';
import SafetyDepositKey from '../images/items/SafetyDepositKey.png';
import BradsIDCard from '../images/items/BradsIDCard.png';
import DetonatorNoBattery from '../images/items/DetonatorNoBattery.png';
import Detonator from '../images/items/Detonator.png';
import KendosGateKey from '../images/items/KendosGateKey.png';
import CaseLockPick from '../images/items/CaseLockPick.png';
import BatteryPack from '../images/items/BatteryPack.png';
import GreenJewel from '../images/items/GreenJewel.png';
import BlueJewel from '../images/items/BlueJewel.png';
import RedJewel from '../images/items/RedJewel.png';
import FancyBox from '../images/items/FancyBox.png';
import HospitalIDCard from '../images/items/HospitalIDCard.png';
import TapePlayerTapeInserted from '../images/items/TapePlayerTapeInserted.png';
import TapePlayer from '../images/items/TapePlayer.png';
import VaccineSample from '../images/items/VaccineSample.png';
import LockerRoomKey from '../images/items/LockerRoomKey.png';
import Fuse3 from '../images/items/Fuse3.png';
import Fuse2 from '../images/items/Fuse2.png';
import Fuse1 from '../images/items/Fuse1.png';
import FlashDrive from '../images/items/FlashDrive.png';
import Vaccine from '../images/items/Vaccine.png';
import CultureSample from '../images/items/CultureSample.png';
import LiquidFilledTestTube from '../images/items/LiquidFilledTestTube.png';
import VaccineBase from '../images/items/VaccineBase.png';
import FireHose from '../images/items/FireHose.png';
import IronDefenseCoin from '../images/items/IronDefenseCoin.png';
import AssaultCoin from '../images/items/AssaultCoin.png';
import RecoveryCoin from '../images/items/RecoveryCoin.png';
import CraftingCompanion from '../images/items/CraftingCompanion.png';
import STARSFieldCombatManual from '../images/items/STARSFieldCombatManual.png';
import SupplyCrate from '../images/items/SupplyCrate.png';

export function selectItemImage(itemId: number): string {
    switch (itemId) {
        case 1:
            return FirstAidSpray;
        case 2:
            return GreenHerb;
        case 3:
            return RedHerb;
        case 5:
            return MixedHerbsGG;
        case 6:
            return MixedHerbsGR;
        case 9:
            return MixedHerbsGGG;
        case 22:
            return GreenHerb2;
        case 23:
            return RedHerb2;
        case 31:
            return HandgunAmmo;
        case 32:
            return ShotgunAmmo;
        case 33:
            return AssaultRifleAmmo;
        case 34:
            return MAGAmmo;
        case 36:
            return MineRounds;
        case 37:
            return ExplosiveRounds;
        case 38:
            return AcidRounds;
        case 39:
            return FlameRounds;
        case 61:
            return Gunpowder;
        case 62:
            return HighGradeGunpowder;
        case 63:
            return ExplosiveA;
        case 64:
            return ExplosiveB;
        case 76:
            return ModeratorHandgun;
        case 77:
            return DotSightHandgun;
        case 78:
            return ExtendedMagazineHandgun;
        case 91:
            return SemiAutoBarrel;
        case 92:
            return TacticalStockShotgun;
        case 93:
            return ShellHolderShotgun;
        case 96:
            return ScopeAssaultRifle;
        case 97:
            return DualMagazineAssaultRifle;
        case 98:
            return TacticalGripAssaultRifle;
        case 101:
            return ExBarrelMAG;
        case 131:
        case 213:
            return AudiocassetteTape;
        case 151:
            return LockPick;
        case 152:
            return BoltCutters;
        case 161:
            return Battery;
        case 162:
            return SafetyDepositKey;
        case 164:
            return BradsIDCard;
        case 165:
            return DetonatorNoBattery;
        case 166:
        case 217:
            return Detonator;
        case 181:
        case 264:
            return FireHose;
        case 182:
            return KendosGateKey;
        case 185:
            return CaseLockPick;
        case 186:
            return BatteryPack;
        case 187:
            return GreenJewel;
        case 188:
            return BlueJewel;
        case 189:
            return RedJewel;
        case 192:
        case 193:
        case 194:
            return FancyBox;
        case 211:
            return HospitalIDCard;
        case 212:
            return TapePlayerTapeInserted;
        case 214:
            return TapePlayer;
        case 215:
            return VaccineSample;
        case 218:
            return LockerRoomKey;
        case 222:
            return Fuse3;
        case 223:
            return Fuse2;
        case 224:
            return Fuse1;
        case 232:
            return FlashDrive;
        case 233:
            return Vaccine;
        case 234:
            return CultureSample;
        case 235:
            return LiquidFilledTestTube;
        case 236:
            return VaccineBase;
        case 301:
            return IronDefenseCoin;
        case 302:
            return AssaultCoin;
        case 303:
            return RecoveryCoin;
        case 304:
            return CraftingCompanion;
        case 305:
            return STARSFieldCombatManual;
        case 311:
        case 312:
        case 313:
        case 314:
        case 315:
        case 316:
            return SupplyCrate;
        default:
            return '';
    }
}
