import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Health from './components/Health';
import DA from './components/DA';
import EnemyHealth from './components/EnemyHealth';
import Inventory from './components/Inventory';
import { fetchData } from './store/slices/game';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const pollingRate = process.env.REACT_APP_POLLING_RATE ? parseInt(process.env.REACT_APP_POLLING_RATE) : 1000;

    const getData = () => {
        dispatch(fetchData());
    }

    useEffect(() => {
        getData();
        setInterval(getData, pollingRate);
    }, []);

    return (
        <div className="App">
            <Health />
            <DA />
            <Inventory />
            <EnemyHealth />
        </div>
    );
};

export default App;
