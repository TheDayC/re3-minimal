import React from 'react';
import { GridItem } from '@chakra-ui/react';

import { selectWeaponImage } from '../../../utils/weapons';
import './index.css';

interface WeaponProps {
    quantity: number;
    weaponId: number;
    attachmentId: number;
}

const Weapon: React.FC<WeaponProps> = ({ quantity, weaponId, attachmentId }) => (
    <GridItem w="100%" h="24" bg="#1d1e1e" color="#ffffff" position="relative" borderRadius="5px" p="1px" border="2px solid #fff">
        <img src={selectWeaponImage(weaponId, attachmentId)} className="weapon" />
        <div className="quantity">{quantity}</div>
    </GridItem>
);

export default Weapon;
