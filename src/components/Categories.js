import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { theme } from '../theme'

export default function Categories() {
  return (
    <View style={{ marginHorizontal: 5}}>
      <View style={{marginHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
        <Text style={{fontSize: wp(4), fontWeight:'semibold', }}>
            Categories
        </Text>
        <TouchableOpacity>
            <Text style={{fontSize: wp(4), color: theme.text}}> See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal:15}}
        style={{marginVertical:4}}
        showsHorizontalScrollIndicator={false}>
            {
                CategoriesData.map((cat,index)=>{
                    return(
                        <TouchableOpacity key={index} style={{alignItems:center, marginVertical: 2}}>
                            <Image source={cat.image} style={{ borderRadius: 50, width: wp(20), height: wp(19)}}/>
                            <Text style={{fontWeight:'semibold'}}>{cat.title}</Text>
                        </TouchableOpacity>
                    )
                })
            }
      </ScrollView>
    </View>
  )
}