import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Provider as ChakraProvider } from '@/components/ui/provider';

import App from './App';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ChakraProvider>
    </StrictMode>
);
