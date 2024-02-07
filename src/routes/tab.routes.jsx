import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

import Mapa from '../screens/Mapa';
import Dashboard from '../screens/Dashboard'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen
                name='mapa'
                component={Mapa}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Início'
                }}
            />
            <Tab.Screen
                name='dashboard'
                component={Dashboard}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name="menu" color={color} size={size} />,
                    tabBarLabel: 'Serviços'
                }}
            />
        </Tab.Navigator>
    )
}