import { FC } from 'react';
import { Box, GridItem, Image } from '@chakra-ui/react';

import { selectWeaponImage } from '@/utils/weapons';

interface WeaponProps {
    quantity: number;
    weaponId: number;
    attachmentId: number;
    colSpan: number;
}

const Weapon: FC<WeaponProps> = ({ quantity, weaponId, attachmentId, colSpan }) => {
    const weaponImg = selectWeaponImage(weaponId, attachmentId);

    return (
        <GridItem w="100%" h="24" bg="#1d1e1e" color="#ffffff" position="relative" borderRadius="5px" p="1px" border="2px solid #fff" colSpan={colSpan}>
            {weaponImg.length > 0 && <Image src={weaponImg} position="relative" display="block" height="100%" zIndex={10} margin="auto" />}
            <Box position="absolute" bottom={0} right={0} color="white" z-index={20} padding={5} fontWeight="bold">
                {quantity}
            </Box>
        </GridItem>
    );
};

export default Weapon;
