import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Touchable, Switch } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

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
  const [ contextMenuEnabled, setContextMenuEnabled ] = useState(false)
  const [ currentStation, setCurrentStation ] = useState(0)
  const [ powerOn, setPowerOn ] = useState(false)
  const [ isStations, setIsStations ] = useState(true)
  const [ waves, setWaves ] = useState([
    {
      station: "92.8",
      favorite: true,
    },
    {
      station: "93.2",
      favorite: false,
    },
    {
      station: "93.6",
      favorite: true,
    },
    {
      station: "94.0",
      favorite: false,
    },
    {
      station: "94.4",
      favorite: true,
    },
  ])

  return (
    <TouchableOpacity onPress={() => {
      setContextMenuEnabled(false)
    }}>
      <View style={{ display: "flex" }}>
        <View style={{ display: "flex", alignItems: 'center' }}>
          {
            powerOn ?
              <>
                <Text style={{ fontSize: 36 }}>Играет</Text>
                <Text style={{ fontSize: 36 }}>{ waves[currentStation].station } MHZ</Text>
              </>
            :
            <Text style={{ fontSize: 36 }}>
              Включите Радио
            </Text>
          }
        </View>
        <View style={{ marginRight: 75, marginVertical: 75, display: "flex", flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => {
            if(powerOn){
              console.log("открываю поиск")
            }
          }}>
            <Text style={{ color: !powerOn ? "rgb(145, 145, 145)" : "rgb(0, 0, 0)", fontWeight: 700 }}>Поиск</Text>
          </TouchableOpacity>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
          <TouchableOpacity onPress={() => {
            console.log("открываю дополнительное окно")
            setContextMenuEnabled(true)
          }}>
            <Text>⋮</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderWidth: 1, borderColor: "rgb(175, 175, 175)", marginHorizontal: 35, borderRadius: 35, backgroundColor: 'rgb(235, 235, 235)', display: "flex" }}>
          
          <View style={{ marginTop: 15, marginLeft: 75, display: "flex", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <View style={{ width: 35, height: 35, backgroundColor: "rgb(255, 255, 255)", borderRadius: 75, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{  }} onPress={() => {
                  console.log("переключаю вкл/выкл")
                  setPowerOn(!powerOn)
                }}>
                  <FontAwesome5 name="power-off" size={24} color={ powerOn ? "rgb(0, 0, 255)" : "rgb(145, 145, 145)" } />
                  {/* <Image style={{ width: 35, height: 35 }} source={ powerImg } /> */}
                </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 35 }}>

            </View>
            {
              powerOn ?
                <View style={{ width: 35, height: 35, backgroundColor: "rgb(255, 255, 255)", borderRadius: 75, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: "rgb(255, 0, 0)", borderRadius: 75 }} onPress={() => {
                      
                    }}>
                    </TouchableOpacity>
                </View>
              :
                <Text></Text>
            }
          </View>

          <View style={{ marginTop: 35, display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{  }} onPress={() => {
              console.log("меняем на предыдущую станцию")
              if(currentStation > 0) {
                setCurrentStation(currentStation - 1)
              }
            }}>
              {
                powerOn ?
                  <Text style={{ fontSize: 36, fontWeight: 300 }}>{ '<' }</Text>
                :
                  <Text></Text>
              }
            </TouchableOpacity>
            <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: powerOn ? "rgb(0, 0, 0)" : "rgb(145, 145, 145)", fontSize: 72, fontWeight: 700, marginHorizontal: 15 }}>
                { waves[currentStation].station }
              </Text>
              <View style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <TouchableOpacity style={{  }} onPress={() => {
                  
                }}>
                  {
                    powerOn ?
                      <AntDesign name="star" size={24} color={ waves[currentStation].favorite ? "rgb(255, 0, 0)" : "rgb(0, 0, 0)" } />
                    :
                      <Text>&nbsp;</Text>
                  }
                  {/* <Image style={{ width: 35, height: 35 }} source={ powerImg } /> */}
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
              {
                powerOn ?  
                  <Text style={{ fontSize: 36, fontWeight: 300 }}>{ '>' }</Text>
                :
                  <Text></Text>
              }
            </TouchableOpacity>
          </View>
          
          <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <ScrollView >
              <Text>|</Text>
            </ScrollView>
          </View>

          

        </View>
        
        <View style={{  borderWidth: 1, borderColor: "rgb(175, 175, 175)", marginHorizontal: 35, marginTop: 75, borderRadius: 35, backgroundColor: 'rgb(235, 235, 235)', display: "flex" }}>
          {
            isStations ?
              <ScrollView style={{ marginVertical: 75 }}>
                {
                  waves.map((wave, waveIdx) => {
                    return (
                      <>
                        <View style={{ flexDirection: 'column', display: "flex" }}>
                          <View style={{ flexDirection: 'row', display: "flex", justifyContent: 'space-between' }}>
                            <Text style={{ color: powerOn && currentStation === waveIdx ? "rgb(0, 0, 255)" : powerOn ? "rgb(0, 0, 0)" : "rgb(145, 145, 145)", fontWeight: 700, alignSelf: 'center', marginLeft: 45 }}>
                              { wave.station } MHZ
                            </Text>
                            <TouchableOpacity style={{ marginRight: 45 }} onPress={() => {
                              console.log("Добавляю в избранное")
                              
                              // wave.favorite = !wave.favorite
                              
                              // setWaves(waves.map((subWave, subWaveIdx) => {
                              //   if(subWaveIdx === waveIdx){
                              //     return !subWave.favorite
                              //   }
                              //   return subWave.favorite
                              // }))

                            }}>
                              <AntDesign name="star" size={24} color={ wave.favorite ? "rgb(255, 0, 0)" : "rgb(0, 0, 0)" } />
                              {/* <Image style={{ width: 35, height: 35, alignSelf: 'center' }} source={ powerImg } /> */}
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
            :
              <View style={{ height: 275, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {
                  waves.map((wave, waveIdx) => {
                    return (
                      wave.favorite ?
                        <View style={{ margin: 15, borderRadius: 150, flexDirection: 'row', width: 75, height: 75, borderWidth: 2, borderColor: "rgb(145, 145, 145, )", justifyContent: 'center', alignItems: 'center',  }}>
                          <Text style={{ color: powerOn && waveIdx === currentStation ? "rgb(0, 0, 255)" : "rgb(145, 145, 145)", alignSelf: 'center' }}>
                            { wave.station }
                          </Text>
                        </View>
                      :
                        <Text></Text>
                    )
                  })
                }
              </View>
          }
        
        </View>
        
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{  }} onPress={() => {
            console.log("переходим к избранному")
            // navigation.navigate("FavouriteActivity")
            setIsStations(false)
          }}>
            <Text>
              Избранное
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{  }} onPress={() => {
            console.log("переходим к списку станций")
            // navigation.navigate("StationsActivity")
            setIsStations(true)
          }}>
            <Text>
              Станции
            </Text>
          </TouchableOpacity>
        </View>
        {
          contextMenuEnabled ?
            <View style={{ width: 250, height: 300, backgroundColor: "rgb(255, 255, 255)", borderRadius: 15, position: 'absolute', top: 125, left: 1045,  }}>
              <TouchableOpacity style={{  }} onPress={() => {
                  console.log("Изменить")
              }}>
                <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 15 }}>
                  Изменить
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{  }} onPress={() => {
                  console.log("Воспроизвести через динамик")
              }}>
                <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 15 }}>
                  Воспроизвести через динамик
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{  }} onPress={() => {
                console.log("Записи")
              }}>
                <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 15 }}>
                  Записи
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{  }} onPress={() => {
                  console.log("Настройки")
                  navigation.navigate("SettingsActivity")
              }}>
                <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 15 }}>
                  Настройки
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{  }} onPress={() => {
                console.log("Свяжитесь с нами")
                window.open("https://ru-ru.facebook.com/")
              }}>
                <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 15 }}>
                  Свяжитесь с нами
                </Text>
              </TouchableOpacity>
            </View>
          :
            <Text></Text>
        }

      </View>
    </TouchableOpacity>
  );

}

export function SettingsActivity() {

  const [ radioTextSwitch, setRadioTextSwitch ] = useState(false)

  return (
    <View>
      <View style={{ borderWidth: 1, borderColor: "rgb(175, 175, 175)", marginTop: 35, marginHorizontal: 35, borderRadius: 35, backgroundColor: 'rgb(235, 235, 235)', display: "flex" }}>
        <View style={{ marginHorizontal: 35, marginVertical: 35, }} >
          <Text style={{ fontSize: 20 }}>
            Память
          </Text>
          <Text style={{ color: "rgb(0, 0, 255)", fontSize: 14, }}>
            Память устройства
          </Text>
          <View style={{ alignSelf: 'flex-start', width: 1125, padding: 4, borderBottomColor: "rgb(175, 175, 175)", borderBottomWidth: StyleSheet.hairlineWidth }}>

          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 35, marginVertical: 35, }} >
          <View>
            <Text style={{ fontSize: 20 }}>
              Радиотекст
            </Text>
            <Text style={{ fontSize: 14 }}>
              Показ информации о станции
            </Text>
            <View style={{ alignSelf: 'center', width: 1125, padding: 4, borderBottomColor: "rgb(175, 175, 175)", borderBottomWidth: StyleSheet.hairlineWidth }}>

            </View>
          </View>
          <Switch value={ radioTextSwitch } onValueChange={() => setRadioTextSwitch(!radioTextSwitch)}></Switch>
        </View>
        <View style={{ marginHorizontal: 35, marginVertical: 35, }} >
          <Text style={{ fontSize: 20 }}>
            Таймер сна
          </Text>
          <Text style={{  color: "rgb(0, 0, 255)", fontSize: 14 }}>
            Выключить
          </Text>
        </View>
      </View>
      <View style={{ borderWidth: 1, borderColor: "rgb(175, 175, 175)", marginTop: 35, marginHorizontal: 35, borderRadius: 35, backgroundColor: 'rgb(235, 235, 235)', display: "flex" }}>
        <Text style={{ fontSize: 20, marginHorizontal: 35, marginVertical: 35, }}>
          Сведения о радио
        </Text>
      </View>
    </View>
  )
}

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainActivity" initialRouteName={ "MainActivity" } component={ MainActivity }  options={{
          headerTitle: props => <Text>Радио</Text>
        }} />
        <Stack.Screen name="StationsActivity" component={ StationsActivity } />
        <Stack.Screen name="FavouriteActivity" component={ FavouriteActivity } />
        <Stack.Screen name="SettingsActivity" component={ SettingsActivity } options={{
          headerTitle: props => <Text>Настройки</Text>
        }} />
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
