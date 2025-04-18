import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createSystem, defaultConfig, defineConfig, ChakraProvider } from '@chakra-ui/react';

import App from './App';
import { store } from './store';

const config = defineConfig({
    theme: {
        tokens: {
            colors: {},
        },
    },
    globalCss: {
        "html": {
            bg: 'transparent'
        },
    },
})

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider value={system}>
            <Provider store={store}>
                <App />
            </Provider>
        </ChakraProvider>
    </StrictMode>
);
