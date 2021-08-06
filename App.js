import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './store';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

const App = () => {
	const Stack = createStackNavigator();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name='Map'
							component={MapScreen}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
