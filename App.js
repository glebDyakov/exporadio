import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function FavouriteActivity() {
  return (
    <View>
      <Text>a</Text>
    </View>
  )
}

export function StationsActivity() {
  return (
    <View>
      <Text>b</Text>
    </View>
  )
}

export function MainActivity({ navigation }) {

  const powerImg = require('./assets/camera.png')
  const [ currentStation, setCurrentStation ] = useState(0)
  const [ waves, setWaves ] = useState([
    {
      station: "92.8",
    },
    {
      station: "93.2",
    },
    {
      station: "93.6",
    },
    {
      station: "94.0",
    },
    {
      station: "94.4",
    },
  ])

  return (
    <View style={{ display: "flex" }}>
      <View style={{ display: "flex", alignItems: 'center' }}>
        <Text>Играет</Text>
        <Text>92.8 MHZ</Text>
      </View>
      <View style={{ marginRight: 75, marginVertical: 75, display: "flex", flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => {
          console.log("открываю поиск")
        }}>
          <Text>Поиск</Text>
        </TouchableOpacity>
        <Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <TouchableOpacity onPress={() => {
          console.log("открываю дополнительное окно")
        }}>
          <Text>⋮</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 35, borderRadius: 35, backgroundColor: 'rgb(235, 235, 235)', display: "flex" }}>
        
        <View style={{ marginTop: 15, marginLeft: 75, display: "flex", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <View style={{ width: 35, height: 35, backgroundColor: "rgb(255, 255, 255)", borderRadius: 75, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{  }} onPress={() => {
                
              }}>
                <Image style={{ width: 35, height: 35 }} source={ powerImg } />
              </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 35 }}>

          </View>
          <View style={{ width: 35, height: 35, backgroundColor: "rgb(255, 255, 255)", borderRadius: 75, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: "rgb(255, 0, 0)", borderRadius: 75 }} onPress={() => {
                
              }}>
              </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 35, display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{  }} onPress={() => {
            console.log("меняем на предыдущую станцию")
            if(currentStation > 0) {
              setCurrentStation(currentStation - 1)
            }
          }}>
            <Text style={{ fontSize: 36, fontWeight: 300 }}>{ '<' }</Text>
          </TouchableOpacity>
          <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 72, fontWeight: 700, marginHorizontal: 15 }}>
              { waves[currentStation].station }
            </Text>
            <View style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
              <TouchableOpacity style={{  }} onPress={() => {
                
              }}>
                <Image style={{ width: 35, height: 35 }} source={ powerImg } />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 15 }}>
                MHZ
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{  }} onPress={() => {
            console.log("меняем на следующую станцию")
            if(currentStation < waves.length - 1) {
              setCurrentStation(currentStation + 1)
            }
          }}>
            <Text style={{ fontSize: 36, fontWeight: 300 }}>{ '>' }</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ display: 'flex', alignItems: 'center', }}>
          <ScrollView>
            <Text>|</Text>
          </ScrollView>
        </View>

        

      </View>

      <View style={{  marginHorizontal: 35, marginTop: 75, borderRadius: 35, backgroundColor: 'rgb(235, 235, 235)', display: "flex" }}>
        <ScrollView style={{ marginVertical: 75 }}>
          {
            waves.map(wave => {
              return (
                <>
                  <View style={{ flexDirection: 'column', display: "flex" }}>
                    <View style={{ flexDirection: 'row', display: "flex", justifyContent: 'space-between' }}>
                      <Text style={{ color: 'rgb(0, 0, 255)', fontWeight: 700, alignSelf: 'center', marginLeft: 45 }}>
                        { wave.station } MHZ
                      </Text>
                      <TouchableOpacity style={{ marginRight: 45 }} onPress={() => {
                        
                      }}>
                        <Image style={{ width: 35, height: 35, alignSelf: 'center' }} source={ powerImg } />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ alignSelf: 'center', width: 1125, padding: 4, borderBottomColor: "rgb(175, 175, 175)", borderBottomWidth: StyleSheet.hairlineWidth }}>

                  </View>
                </>
              )
            })
          }
        </ScrollView>
      
      </View>
      
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity style={{  }} onPress={() => {
          console.log("переходим к избранному")
          navigation.navigate("FavouriteActivity")
        }}>
          <Text>
            Избранное
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{  }} onPress={() => {
          console.log("переходим к списку станций")
          navigation.navigate("StationsActivity")
        }}>
          <Text>
            Станции
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );

}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainActivity" initialRouteName={ "MainActivity" } component={ MainActivity } />
        <Stack.Screen name="StationsActivity" component={ StationsActivity } />
        <Stack.Screen name="FavouriteActivity" component={ FavouriteActivity } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
