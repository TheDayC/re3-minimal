import React, { useEffect } from 'react';

import Health from '@/components/Health';
import DA from '@/components/DA';
import EnemyHealth from '@/components/EnemyHealth';
import Inventory from '@/components/Inventory';
import { fetchData } from '@/store/slices/game';
import { useAppDispatch } from '@/store';
import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const pollingRate = import.meta.env.VITE_POLLING_RATE ? parseInt(import.meta.env.VITE_POLLING_RATE) : 1000;

    const getData = () => {
        dispatch(fetchData());
    };

    useEffect(() => {
        getData();
        setInterval(getData, pollingRate);
    }, []);

    return (
        <Box display="block" width="100%">
            <Health />
            <DA />
            <Inventory />
            <EnemyHealth />
        </Box>
    );
};

export default App;
