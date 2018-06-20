import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import listCustumer from './components/listCustumer';
import NewItem from './components/NewItem';
import EditItem from './components/EditItem';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="listCustumer" component={listCustumer} title='List Custumers' initial />
                <Scene key="NewItem" component={NewItem} title='New Custumer' />
                <Scene key="EditItem" component={EditItem} title='EditItem Custumer' />
            </Stack>            
        </Router>
    );
};


export default RouterComponent;