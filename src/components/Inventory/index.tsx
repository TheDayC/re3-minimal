import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridItem } from '@chakra-ui/react';

import selector from './selector';

const showInventory = Boolean(process.env.REACT_APP_INVENTORY === 'true');

const EnemyHealth: React.FC = () => {
    const { enemyHealth } = useSelector(selector);

    if (!showInventory) {
        return null;
    }

    return ();
};

export default EnemyHealth;