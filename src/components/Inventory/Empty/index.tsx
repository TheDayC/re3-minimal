import React from 'react';
import { GridItem } from '@chakra-ui/react';

const Empty: React.FC = () => (
    <GridItem w="100%" h="24" bg="#1d1e1e" color="#ffffff" position="relative" borderRadius="5px" p="1px" border="2px solid #fff">
        &nbsp;
    </GridItem>
);

export default Empty;
