import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
	{
		id: '123',
		title: 'Get a ride',
		image: 'https://links.papareact.com/3pn',
		screen: 'Map',
	},
	{
		id: '456',
		title: 'Order Food',
		image: 'https://links.papareact.com/28w',
		screen: 'Eats', // TODO: Change in future
	},
];

const NavOptions = () => {
	const navigation = useNavigation(); // we can also get it as prop in the screens under Stack.Navigator

	return (
		<FlatList
			data={data}
			horizontal
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
					onPress={() => navigation.navigate(item.screen)}>
					<View>
						<Image
							source={{ uri: item.image }}
							style={{ width: 120, height: 120, resizeMode: 'contain' }}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
						<Icon
							type='antdesign'
							name='arrowright'
							color='white'
							style={tw`p-2 bg-black rounded-full w-10 mt-4`}
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;
