import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { Categories, SortCategories }  from '../components/Categories'
import Destination from '../components/destinations'


export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: '1', backgroundColor: white }}>
      <ScrollView>
        {/* afficher l'avatar */}
        <View style={{marginVertical: '5px', flexDirection:'row', alignItems:'center', marginBottom: '10px'}}>
          <Text style={{fontSize: wp(7) , color: 'black', fontWeight:'700'}}> Let's Discover</Text>
          <TouchableOpacity>
            <Image
            source={require('../../assets/avatar/illustration-3d-jeune-homme-barbe-moustache.jpg')}
            style ={{height: wp(10), width: wp(12)}}
            />
          </TouchableOpacity>
        </View>

        {/* bar de rechreche */}
        <View style={{marginVertical: '5px', marginBottom: '5px'}}>
          <View style={{flexDirection:'row', backgroundColor:'white', borderRadius:50, padding: 4, marginVertical: 2, paddingLeft: 6}}>
            <MagnifyingGlassIcon size={20} strokeWidth={3} color='gray'/>
            <TextInput
              placeholder='Search destination'
              placeholderTextColor={'gray'}
              style={{flex: 1, marginBottom: 1, paddingLeft: 3}}
            />
          </View>
        </View>

          {/* categories */}
          <View style={{marginBottom: 5}}>
            <Categories/>
          </View>

          {/* sort categories */}
          <View style={{marginBottom: 5}}>
            <SortCategories/>
          </View>

          {/* destination */}
          <View style={{marginBottom: 5}}>
            <Destination/>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}
