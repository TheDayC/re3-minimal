import React from 'react';
import { GridItem } from '@chakra-ui/react';

import { selectItemImage } from '../../../utils/items';
import './index.css';

interface ItemProps {
    quantity: number;
    itemId: number;
}

const Item: React.FC<ItemProps> = ({ itemId, quantity }) => (
    <GridItem w="100%" h="24" bg="#1d1e1e" color="#ffffff" position="relative" borderRadius="5px" p="1px" border="2px solid #fff">
        <img src={selectItemImage(itemId)} className="weapon" />
        <div className="quantity">{quantity}</div>
    </GridItem>
);

export default Item;
