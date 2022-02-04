import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@chakra-ui/react';
import {sortBy, slice} from 'lodash';

import selector from './selector';
import Empty from './Empty';
import Item from './Item';
import Weapon from './Weapon';

const Inventory: React.FC = () => {
    const { inventory, inventoryCount } = useSelector(selector);
    const showInventory = Boolean(process.env.REACT_APP_INVENTORY === 'true');

    if (!showInventory || !inventory) {
        return null;
    }

    const sortedInventory = slice(sortBy(inventory, (item) => item.slotPosition), 0, inventoryCount);

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={2} maxW="408px">
            {sortedInventory
                .map((item, i) => {
                    if (item.isEmptySlot) {
                        return <Empty key={`item-${i}`} />;
                    } else if (item.isItem) {
                        return <Item itemId={item.itemID} quantity={item.quantity} key={`item-${i}`} />;
                    } else if (item.isWeapon) {
                        return <Weapon weaponId={item.weaponID} attachmentId={item.attachments} quantity={item.quantity} key={`item-${i}`} />;
                    }
                })}
        </Grid>
    );
};

export default Inventory;
