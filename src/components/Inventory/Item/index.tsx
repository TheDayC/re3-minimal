import { FC } from 'react';
import { Box, GridItem, Image } from '@chakra-ui/react';

import { selectItemImage } from '../../../utils/items';

interface ItemProps {
    quantity: number;
    itemId: number;
    colSpan: number;
}

const Item: FC<ItemProps> = ({ itemId, quantity, colSpan }) => {
    const itemImg = selectItemImage(itemId);

    return (
        <GridItem w="100%" h="24" bg="#1d1e1e" color="#ffffff" position="relative" borderRadius="5px" p="1px" border="2px solid #fff" colSpan={colSpan}>
            {itemImg.length > 0 && <Image src={itemImg} display="block" position="relative" height="100%" zIndex={10} margin="auto" />}
            <Box position="absolute" bottom="0" right="0" color="white" zIndex={20} padding={5} fontWeight="bold">
                {quantity}
            </Box>
        </GridItem>
    );
};

export default Item;
