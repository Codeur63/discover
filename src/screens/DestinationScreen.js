import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { ChevronLeftIcon, ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { theme } from '../theme';

export default function DestinationScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavourite, toogleFavourite] = useState(false)

  return (
    <View>
      <Image
      source={item.image}
      style={{width: widthPercentageToDP(100), height: heightPercentageToDP(55)}}/>
      <StatusBar style={'black'}/>

      {/* back button */}
      <SafeAreaView style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', position:'absolute', width:'auto'}}>
        <TouchableOpacity 
        onPress={()=>{
            navigation.goBack()
        }}
            style={{ padding:2, marginLeft: 4, borderRadius: 9999, backgroundColor:'rgba(255,255,255,0.52'}}
        >
            <ChevronLeftIcon size={widthPercentageToDP(7)} strokeWidth={4} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>{
                toogleFavourite(!isFavourite)
            }}
            style={{ padding:2, marginLeft: 4, borderRadius: 9999, backgroundColor:'rgba(255,255,255,0.52'}}
        >
            <HeartIcon size={widthPercentageToDP(7)} strokeWidth={4} color={isFavourite? "red": "white"}/>
        </TouchableOpacity>
      </SafeAreaView>

      {/* tilte description  */}
      <View style={{paddingHorizontal: 5, justifyContent: 'space-between', paddingTop: 8, marginTop: 14, backgroundColor:'white', borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
            <ScrollView
                style={{marginVertical: 3}}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={{justifyContent:'space-between', alignItems:'flex-start', flexDirection:'row'}}>
                    <Text style={{fontSize: widthPercentageToDP(7), fontWeight:'bold'}}>
                        {item?.title}
                    </Text>
                    <Text style={{fontSize: widthPercentageToDP(7), fontWeight:'bold', color: theme.text}}>
                        {item?.price}
                    </Text>
                </View>
                <Text style={{fontSize: widthPercentageToDP(7), fontWeight:'bold', marginBottom: 2}}> {item?.description}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical: 2}}>
                    <View style={{flexDirection:'row', marginVertical: 2}}>
                        <ClockIcon size={widthPercentageToDP(7)} color='skyblue'/>
                        <View style={{ marginVertical: 2}}>
                            <Text style={{fontSize: widthPercentageToDP(4.5), fontWeight:'bold'}}>{item.duration}</Text>
                            <Text>Duration</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginVertical: 2}}>
                        <MapPinIcon size={widthPercentageToDP(7)} color='#f87171'/>
                        <View style={{ marginVertical: 2}}>
                            <Text style={{fontSize: widthPercentageToDP(4.5), fontWeight:'bold'}}>{item.distance}</Text>
                            <Text>Distance</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginVertical: 2}}>
                        <SunIcon size={widthPercentageToDP(7)} color='orange'/>
                        <View style={{ marginVertical: 2}}>
                            <Text style={{fontSize: widthPercentageToDP(4.5), fontWeight:'bold'}}>{item.sunny}</Text>
                            <Text>Sunny</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={{marginBottom:6, justifyContent:'center', alignItems:'center', borderRadius: 9999, marginVertical: 'auto', backgroundColor: theme.bg(0.7), width: widthPercentageToDP(50), height: widthPercentageToDP(15)}}>
                <Text style={{color:'white', fontSize: widthPercentageToDP(6.5)}}>Book Now</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}