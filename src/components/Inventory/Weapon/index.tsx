import React from 'react';
import { GridItem } from '@chakra-ui/react';

import { selectWeaponImage } from '../../../utils/weapons';
import './index.css';

interface WeaponProps {
    quantity: number;
    weaponId: number;
    attachmentId: number;
}

const Weapon: React.FC<WeaponProps> = ({ quantity, weaponId, attachmentId }) => {
    return (
        <GridItem w="24" h="24" bg="#1d1e1e" color="#ffffff" position="relative" borderRadius="3px" p="3px">
            <img src={selectWeaponImage(weaponId, attachmentId)} className="weapon" />
            <div className="quantity">{quantity}</div>
        </GridItem>
    );
};

export default Weapon;
