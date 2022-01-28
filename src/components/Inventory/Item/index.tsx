import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridItem } from '@chakra-ui/react';

const Item: React.FC = () => {

    return (
        <GridItem w="100%" h="10" bg="#1d1e1e" color="#ffffff">
            I
        </GridItem>
    );
};

export default Item;
