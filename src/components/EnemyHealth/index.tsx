import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Progress, Text } from '@chakra-ui/react';

import { healthPercentage } from '../../helpers/game';
import selector from './selector';
import './index.css';

const EnemyHealth: React.FC = () => {
    const { enemies } = useSelector(selector);

    if (!enemies) return null;

    return (
        <Flex direction="column">
            {enemies.map((enemy, i: number) => (
                <div className="ehWrapper" key={`enemy-health-${i}`}>
                    <Text className="ehLabel">Enemy: {healthPercentage(enemy.CurrentHP, enemy.MaximumHP, 2)}%</Text>
                    <Progress
                        value={enemy.CurrentHP || 0}
                        colorScheme="red"
                        height="24px"
                        isAnimated={true}
                        min={0}
                        max={enemy.MaximumHP || 1000}
                        className="enemyHealthBar"
                        marginBottom="10px"
                        flexDirection="column"
                    />
                </div>
            ))}
        </Flex>
    );
};

export default EnemyHealth;
