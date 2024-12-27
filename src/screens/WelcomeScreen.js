import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import HomeScreen from './HomeScreen'

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent:'flex-end'}}>
      {/* image de fond  */}
        <Image
        source={require('../../assets/images/pexels-receptcelik-7882456.jpg')}
        style={{flex: '1', height:'full', width:'full', position:'absolute'}}
        />

        {/* contenu de la page  */}
      <View style={{ padding: '5', paddingBottom:'10', marginVertical: '8'}}>
        <View>
            <Text style={{color:'white', fontSize:'28', fontStyle:'normal', fontWeight:'bold'}}>Travelling mode easy!</Text>
            <Text style ={{color:'white', fontSize:'12'}}>Experience the world's best adventure around the world with us </Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: 'black', padding: '20', borderRadius: '50', margin: 'auto'}}
        onPress={()=>{
          console.log('Press Pressed')
          navigation.navigate('HomeScreen')
        }}>
          <Text style={{fontSize: hp(3)}}> Let's go</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
