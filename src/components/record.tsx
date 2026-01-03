import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale,verticalScale,moderateScale } from '../utils/responsive'
import useDataStore from '../stores/useDataStore'

const record = () => {
    const day = useDataStore((state)=>state.day)
    const date = useDataStore((state)=>state.date)
  return (
    <View style={styles.button}>
      <Text style={styles.textBox}>{day} • {date}</Text>
    </View>
  )
}

export default record

const styles = StyleSheet.create({
    button:{
        width:horizontalScale(361),
        height:verticalScale(41),
        borderWidth:moderateScale(1),
        justifyContent:'center',
        paddingLeft:horizontalScale(10),
    },
    textBox:{
        width:horizontalScale(141),
        height:verticalScale(17),
    }
})