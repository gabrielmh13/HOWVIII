import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Donate from './pages/Donate';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Adopt" component={Adopt} />
            <Stack.Screen name="Donate" component={Donate} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
