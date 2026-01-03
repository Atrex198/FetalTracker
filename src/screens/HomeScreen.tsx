import { StyleSheet, Text, View,Image ,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import {LinearGradient} from 'react-native-linear-gradient'
import { horizontalScale,verticalScale,moderateScale } from '../utils/responsive'
import mother from '../assets/mother.jpg'
import useDataStore from '../stores/useDataStore'
import leap from '../assets/leap.png'
import save from '../assets/save.png'
import { useHeaderHeight } from '@react-navigation/elements'
const HomeScreen = ({navigation}) => {
const records = useDataStore((state)=>state.records)
const headerHeight = useHeaderHeight()

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#FFFFFF',marginTop:-headerHeight}}>
      <View style={styles.box}>
        <View style={styles.gradientBox}>
          <Image 

            source={mother}
            style={styles.image}
          />
          <View style={{position:'absolute',flexDirection:'row'}}>
          <Image
          source={leap}
          style={styles.leap}
          />  
          <Text style={styles.ArticleText}>Articles</Text>
        </View>
           <View style={styles.saveBox}>
          <Image
          source={save}
          style={styles.saveIcon}
          />
          <Text style={styles.saveText}>Save</Text>
          </View>
          <LinearGradient
          
            colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.2)', 'transparent']}
            locations={[0, 0.7, 1]}
            style={styles.gradientTop}
          />
          
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)']}
            locations={[0, 1, 0.7 ]}
            style={styles.gradientBottom}
          />
          <View style={{zIndex:100,position:'absolute'}}>
            <Text style={styles.DFMText}>DFM (Fetal Movement)</Text>
          </View>
          
        


        </View>
        <View style={{flex:1,justifyContent:'center'}}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Record DFM')}

          >
      <View style={styles.recordBox}>
        <Text style={styles.recordBoxText}>Record Fetal Movement</Text>
      </View>
      </TouchableOpacity>
      </View>

        <View style={{marginTop:verticalScale(32), width:horizontalScale(361), height:verticalScale(237)}}>
        <Text style={{width:horizontalScale(361),height:verticalScale(21),fontWeight:600,fontSize:moderateScale(16),marginBottom:verticalScale(10),fontFamily:'InstrumentSans-SemiBold'}} >Past Records</Text>
        <FlatList
          data={records}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
    
      <View style={styles.button}>
            <Text style={[styles.textBox,{textAlign:'left'}]}>{item.day} • {item.date}</Text>
            <Text style={[styles.textBox,{textAlign:'right'}]}>{item.time}</Text>
          </View>

  )}
  ItemSeparatorComponent={()=><View style={{height:verticalScale(6)}}></View>}
/>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    box:{
        width:horizontalScale(361),
        height:verticalScale(517),
    },
    image:{
        width:horizontalScale(361),
        height:verticalScale(160),
        resizeMode:'stretch',
        
    },
    gradientTop:{
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: verticalScale(65)
    },
    gradientBottom:{
        position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: verticalScale(65)
    },
    gradientBox:{
        width:horizontalScale(361),
        height:verticalScale(160),
        position:'relative',
        borderRadius:moderateScale(16),
        overflow:'hidden'
    },
    button:{
        width:horizontalScale(361),
        height:verticalScale(41),
        borderWidth:moderateScale(1),
        alignItems:'center',
        paddingHorizontal:horizontalScale(10),
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:moderateScale(6),
        borderColor:'#EFEFEF'
    },
    textBox:{
      fontWeight:'500',
      fontSize:moderateScale(14),
      fontFamily:'InstrumentSans-Medium'
    },
    recordBox:{
      width:horizontalScale(361),
      height:verticalScale(56),
      borderRadius:moderateScale(50),
      borderWidth:moderateScale(1),
      justifyContent:'center',
      alignItems:'center',
      marginTop:verticalScale(32),
    },
    recordBoxText:{
    fontWeight:'600',
    fontSize:moderateScale(16),
    fontFamily:'InstrumentSans-SemiBold'
    },
    leap:{
      
      width:horizontalScale(48),
      height:verticalScale(24),
      marginTop:verticalScale(12),
      marginLeft:horizontalScale(12),
      zIndex:100,
    },
    ArticleText:{
      marginTop:verticalScale(12),
      fontWeight:'700',
      fontSize:moderateScale(14),
      zIndex:100,
      alignSelf:'center',
      fontFamily:'InstrumentSans-Bold'
    },
    saveBox:{
      width:horizontalScale(64),
      height:verticalScale(32),
      borderRadius:moderateScale(24),
      borderWidth:moderateScale(1),
      backgroundColor:'#FFFFFF',
      marginLeft:horizontalScale(289),
      marginTop:verticalScale(8),
      position:'absolute',
      zIndex:100,
      borderColor:'#D2D2D2',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row'
    },
    saveIcon:{
      zIndex:100,
      width:verticalScale(16),
      height:horizontalScale(16)
    },
    saveText:{
      fontWeight:500,
      fontSize:moderateScale(12),
      marginLeft:horizontalScale(4),
      fontFamily:'InstrumentSans-Medium'
    },
    DFMText:{
      fontWeight:'700',
      fontSize:moderateScale(16),
      color:'#FFFFFF',
      marginTop:verticalScale(123),
      marginLeft:horizontalScale(16),
      fontFamily:'InstrumentSans-Bold'
    }
    
})