import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login'
import Register from '../screens/Register'
import Mapa from '../screens/Mapa'
import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="login"
                component={Login}
            />
            <Stack.Screen 
                name="register"
                component={Register}
            />
            <Stack.Screen 
                name="mapa"
                component={Mapa}
            />
        </Stack.Navigator>
    )
}