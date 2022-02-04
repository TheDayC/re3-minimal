import React from 'react';
import { GridItem } from '@chakra-ui/react';

const Empty: React.FC = () => (
    <GridItem w="24" h="24" bg="#1d1e1e" color="#ffffff" position="relative" borderRadius="3px" p="3px" border="1px solid #fff">
        &nbsp;
    </GridItem>
);

export default Empty;
