import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';

import Login from '../screens/Login'
import Register from '../screens/Login'

export default function Routes() {
    return (
        <NavigationContainer>
            <Login />
        </NavigationContainer>
    )
}