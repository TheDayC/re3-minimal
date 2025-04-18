import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Progress, Text } from '@chakra-ui/react';

import { healthPercentage } from '../../helpers/game';
import selector from './selector';

const EnemyHealth: React.FC = () => {
    const { enemies } = useSelector(selector);

    if (!enemies) return null;

    return (
        <Flex direction="column">
            {enemies.slice(0, 5).map((enemy, i: number) => (
                <Box key={`enemy-health-${i}`} display="flex" position="relative" width="100%">
                    <Text position="absolute" top={0} left="calc(50% - 50px)" zIndex={10} font-weight="bold" margin={0} fontSize={14} color="white">
                        Enemy: {healthPercentage(enemy.CurrentHP, enemy.MaximumHP, 2)}%
                    </Text>
                    <Progress.Root
                        value={enemy.CurrentHP || 0}
                        colorPalette="red"
                        width="100%"
                        height="24px"
                        min={0}
                        max={enemy.MaximumHP || 1000}
                        className="enemyHealthBar"
                        marginBottom="10px"
                        flexDirection="column"
                        zIndex={5}
                    >
                        <Progress.Track height="100%">
                            <Progress.Range />
                        </Progress.Track>
                        <Progress.Label />
                    </Progress.Root>
                </Box>
            ))}
        </Flex>
    );
};

export default EnemyHealth;
