import { z } from 'zod';

import { GameStateSchema } from '@/utils/schema';

export type GameState = z.infer<typeof GameStateSchema>;
