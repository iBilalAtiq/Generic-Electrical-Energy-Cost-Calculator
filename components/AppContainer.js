import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './AppRoutes';

const AppContainer = () => {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
}

export default AppContainer;