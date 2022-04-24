import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: 101,
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen'
  },
  {
    id: 102,
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen'
  }
]

const NavOptions = () => {
  return (
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
                <TouchableOpacity style={tw`p-2 pb-8 pl-6 pt-4 bg-gray-200 w-40 m-2 h-60`}>
                  <View>
                    <Image
                        style={{height: 120, width: 120,resizeMode: 'contain'}}
                        source={{uri: item.image}}
                    />
                  </View>
                  <Text style={tw`text-lg font-semibold mt-2`}>{item.title}</Text>
                  <Icon
                      style={tw`p-2 bg-white rounded-full w-10 mt-4`}
                      name='arrowright'
                      color='white'
                      type='antdesign'/>
                </TouchableOpacity>
            )
          }}
          horizontal
      />
  );
};

export default NavOptions;
