import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					source={require('../images/uber-logo.png')}
					style={{ width: 100, height: 100, resizeMode: 'contain' }}
				/>
			</View>

			<NavOptions />
		</SafeAreaView>
	);
};

export default HomeScreen;
