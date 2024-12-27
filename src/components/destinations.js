import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { DestinationData } from '../constants/DestinationData'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { HeartIcon } from 'react-native-heroicons/outline'

const navigation = useNavigation();


export default function Destination() {
  return (
    <View style={{ flexDirection: 'row', justifyContent:'space-between', flexWrap: 'wrap'}}>
      {
        DestinationData.map((item, index)=>{
          return (
            <DestinationCard navigation={navigation} item={item} key={index}/>
          )
        })
      }
    </View>
  )
}

function DestinationCard ({item}){

  const [isFavourite, toogleFavourite] = useState(false)
  return (
    
    <TouchableOpacity
      style={{width: widthPercentageToDP(44), height: widthPercentageToDP(65), justifyContent: 'flex-end', position: 'relative', marginHorizontal: 2, marginBottom: 5}}
      onPress={()=>{
         navigation.navigate('Destination', {...item})
      }}
    >
      <Image
        source ={item.image}
        style ={{width: widthPercentageToDP(44), borderRadius: 35, height: widthPercentageToDP(65), positon: 'absolute'}}
      />
      <LinearGradient
        colors ={['transparent', 'rgba(0,0,0,0.8']}
        style ={{width: widthPercentageToDP(44), height: heightPercentageToDP(15), position: 'absolute', borderBottomRightRadius: 35, borderBottomLeftRadius: 35}}
        start ={{z: 0.5, y: 0}}
        end ={{x: 0.5, y:1}}
      />
      <TouchableOpacity onPress={()=>{
        toogleFavourite(!isFavourite)
      }} style={{position: 'absolute', top: 1, right: 3, borderRadius: 'full', padding: 3, backgroundColor: rgba(255,255,255,0.4)}}>
        <HeartIcon size={widthPercentageToDP(5)} color = 'white'/>
      </TouchableOpacity>

      <Text style={{color: 'white', fontSize: widthPercentageToDP(4)}}>{item.title}</Text>
      <Text style={{color:'white', fontSize: widthPercentageToDP(2.2)}}>{item.text}</Text>
    </TouchableOpacity>
  )
}