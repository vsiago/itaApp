import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';

import StackRoutes from '../routes/stack.routes'

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}