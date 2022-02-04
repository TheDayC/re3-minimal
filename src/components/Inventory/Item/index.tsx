import React from 'react';
import { GridItem } from '@chakra-ui/react';

import { selectItemImage } from '../../../utils/items';
import './index.css';

interface ItemProps {
    quantity: number;
    itemId: number;
}

const Item: React.FC<ItemProps> = ({ itemId, quantity }) => (
    <GridItem w="24" h="24" bg="#1d1e1e" color="#ffffff" position="relative" borderRadius="3px" p="3px" border="1px solid #fff">
        <img src={selectItemImage(itemId)} className="weapon" />
        <div className="quantity">{quantity}</div>
    </GridItem>
);

export default Item;
