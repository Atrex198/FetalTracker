import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import RecordDFM from './src/screens/RecordDFM'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import info from './src/assets/Info.png';
import child from './src/assets/child.png';
import useDataStore from './src/stores/useDataStore';

const Stack = createNativeStackNavigator();

const HomeHeaderRight = () => {

  return (
    <View style={{flexDirection:'row',alignItems:'center',marginRight:16}}>
      <Image source={child} style={{width:24, height:24}} />
      <Text style={{marginLeft:8,fontSize:16,fontWeight:'600'}}>0</Text>
    </View>
  );
};

const RecordHeaderRight = () => {
  const setModalVisible = useDataStore((state)=>state.setModalVisible);
  return (
    <TouchableOpacity onPress={()=>setModalVisible(true)}>
      <Image source={info} style={{width:32, height:32}} />
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "DFM (Kick Counter)" component={HomeScreen}
        options={{
          headerTitleAlign:'center',
          headerRight: () => <HomeHeaderRight />,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18
          }
        }}/>
        <Stack.Screen name = "Record DFM" component={RecordDFM}
        options={{
          headerTitleAlign:'center',
          headerRight: () => <RecordHeaderRight />,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})