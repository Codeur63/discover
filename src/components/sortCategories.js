import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { sortCategoriesData } from '../constants/CategoriesData'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { theme } from '../theme'

export default function SortCategories() {
    const [activeSort, setActiveSort] = useState('populat')
  return (
    <View style={{ alignItems: 'center', justifyContent:'space-around', flexDirection: 'row', marginHorizontal:4, backgroundColor:'white', borderRadius: 50}}>
      {
        sortCategoriesData.map((cat,index)=>{
            let isActive = sort == activeSort;
            let activebuttonCall = isActive ? style={backgroundColor:'white'} : '';
            return(
                <TouchableOpacity key={index} style={{ borderRadius: 'full', paddingHorizontal: 4}}>
                    <Text style={{fontWeight: 'semibold', fontSize: widthPercentageToDP(4), color: isActive? theme.text : ''}}>{sort}</Text>
                </TouchableOpacity>
            )
        })
      }
    </View>
  )
}