import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../utils/responsive'

interface StepBoxProps{
  num:number;
  text:string;
  color:string;
  borderRadius?:number;
}

const StepBox = ({num,text,color,borderRadius}:StepBoxProps) => {
  return (
    <View style={[styles.box,{backgroundColor:color,borderRadius:borderRadius}]}>
      <Text style={styles.boxNumber}>{num}</Text>
      <Text style={styles.boxText}>{text}</Text>
    </View>
  )
}

export default StepBox

const styles = StyleSheet.create({
    box:{
        borderWidth:moderateScale(1),
        height:verticalScale(72),
        flexDirection:'row',
        alignItems:'flex-start',
        paddingVertical:verticalScale(12),
        paddingHorizontal:horizontalScale(12)
    },
    boxNumber:{
        marginRight:horizontalScale(8),
        fontWeight:'700',
        fontSize:moderateScale(16)
    },
    boxText:{
        flex:1,
        fontWeight:'700',
        fontSize:moderateScale(16)
    }
})