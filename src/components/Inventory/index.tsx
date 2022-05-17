import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@chakra-ui/react';
import { sortBy, slice } from 'lodash';

import selector from './selector';
import Empty from './Empty';
import Item from './Item';
import Weapon from './Weapon';

const twoSlotIds = [7,11,21,22,32,42,49];

const Inventory: React.FC = () => {
    const { inventory } = useSelector(selector);
    const showInventory = Boolean(process.env.REACT_APP_INVENTORY === 'true');

    if (!showInventory || !inventory) {
        return null;
    }

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={2} w="100%">
            {inventory.map((item, i) => {
                if (item.isEmptySlot) {
                    return <Empty key={`item-${i}`} />;
                } else if (item.isItem) {
                    return <Item itemId={item.itemID} quantity={item.quantity} key={`item-${i}`} />;
                } else if (item.isWeapon) {
                    const currentIsDouble = twoSlotIds.includes(item.weaponID);

                    return <Weapon weaponId={item.weaponID} attachmentId={item.attachments} quantity={item.quantity} colSpan={currentIsDouble ? 2 : 1} key={`item-${i}`} />;
                }
            })}
        </Grid>
    );
};

export default Inventory;
