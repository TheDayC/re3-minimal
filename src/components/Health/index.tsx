import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Progress, Text } from '@chakra-ui/react';

import selector from './selector';
import { healthColor, healthPercentage } from '../../helpers/game';

const Health: React.FC = () => {
    const { currentHealth, maxHealth } = useSelector(selector);

    const hp = healthPercentage(currentHealth, maxHealth, 2);
    const theme = healthColor(hp);

    return (
        <Box display="flex" position="relative" width="100%">
            <Text position="absolute" top={3} left="calc(50% - 55px)" zIndex={10} fontWeight="bold">
                Health: {hp}%
            </Text>
            <Progress.Root colorPalette={theme} value={currentHealth} height="32px" min={0} max={maxHealth} width="100%">
                <Progress.Track>
                    <Progress.Range />
                </Progress.Track>
                <Progress.Label />
                <Progress.ValueText />
            </Progress.Root>
        </Box>
    );
};

export default Health;
