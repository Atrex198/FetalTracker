import { StyleSheet, Text, View ,TouchableOpacity,Modal,Image} from 'react-native'
import React, { useState,useEffect } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../utils/responsive'
import useDataStore from '../stores/useDataStore'
import StepBox from '../components/StepBox'
import { BlurView } from 'expo-blur'
import cross from '../assets/cross.png'
import footprints from '../assets/Footprints.png'
import info from '../assets/Info.png'
import { useHeaderHeight } from '@react-navigation/elements'
const RecordDFM = () => {

    const setRecords = useDataStore((state)=>state.setRecords)
    const modalVisibility = useDataStore((state)=>state.modalVisible)
    const setModalVisibility = useDataStore((state)=>state.setModalVisible)
    const [seconds,setSeconds]=useState(0)
    const [start,setStart]=useState(false)
    const [lowMovementModal, setLowMovementModal] = useState(false)
    const headerHeight = useHeaderHeight()

 const formatTime = (totalSeconds: number) => {
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return (
    
    mins.toString().padStart(2, '0') + ":" +
    secs.toString().padStart(2, '0')
  );
};
  const handleRecord=()=>{
    const today = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
    const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = days[today.getDay()]
    const time = formatTime(seconds)
    return {date,day,time}
  }
    useEffect(()=>{
        let interval;
       
        if(start){
        interval=setInterval(()=>{
            setSeconds((prev)=>prev+1)
        },1000)
        }
        return ()=>clearInterval(interval);
    },[start])

  return (
    <View style={{backgroundColor:'#fdedfa',flex:1,marginTop:-headerHeight}}>

      <View style={styles.box}>
        <Text style={styles.boxText}>Stop recording after{'\n'}10 kicks</Text>
      </View>
      <View style={styles.arrow}>
      </View>
      <View style={styles.recordBox}>
 <View style={[styles.recordBox,{width:horizontalScale(234),height:verticalScale(132)}]}>
     <View style={[styles.recordBox,{width:horizontalScale(190),height:verticalScale(114)}]}>
<Text style={styles.timer}>{formatTime(seconds)}</Text>
</View>
 </View>
      </View>
      {/* Stop and start recording */}
      <TouchableOpacity
      onPress={()=>{
        setStart((prev)=>!prev)
      }
    }

      >
         <View style={styles.stopButtonBox}>
            {!start&&<View style={styles.startButton}>
            </View>}
            {start&&<View style={styles.stopButton}></View>}
    </View>
    </TouchableOpacity>
    <View>

        {/*save button*/}
<TouchableOpacity
    onPress={()=>{
        setRecords(handleRecord());
        setStart(false);
        setSeconds(0);
    
    }}
>
    <View style={styles.save}>
<Text style={{fontWeight:'600',fontSize:16,fontFamily:'InstrumentSans-SemiBold'}}>Save</Text>
    </View>
    </TouchableOpacity>


    <TouchableOpacity
    onPress={()=>setLowMovementModal(true)}
    >
    <View style={{width:horizontalScale(213),height:verticalScale(50),justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:verticalScale(30),marginBottom:verticalScale(20)}}>
<Text style={{textAlign:'center',fontWeight:'600',fontSize:18,textDecorationLine:'underline',textDecorationColor:'#000000',fontFamily:'InstrumentSans-SemiBold'}}>What if I am not getting enough kicks?</Text>
    </View>
    </TouchableOpacity>
    </View>
    <Modal
    animationType='fade'
    onRequestClose={()=>setModalVisibility(false)}
    visible={modalVisibility}
    transparent={true}
    >
      <BlurView experimentalBlurMethod='dimezisBlurView' intensity={4} tint="light" style={styles.modalBlur} />
      <View style={[styles.modalBlur,{backgroundColor:'rgba(0,0,0,0.3)'}]}/>
    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
      <TouchableOpacity
      onPress={()=>setModalVisibility(false)}
      ><View style={styles.modalClose}>
      <Image
      source={cross}
      />
      </View>
      </TouchableOpacity>
      <View style={styles.modalContentContainer}>
      <View style={[styles.modalTitle]}>
      <Image
      source={footprints}
      style={{width:24,height:24}}
      />
      <Text style={{marginLeft:12,fontWeight:'700',fontSize:20,fontFamily:'InstrumentSans-Bold'}}>Steps to count fetal kicks</Text>
      </View>
            <View style={[styles.modalBox,{borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:4}]}>
        <Text style={styles.modalTextNumber}>1.</Text>
        <Text style={styles.modalText}>Choose a <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>time</Text> when you are <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>least distracted</Text> or when you typically <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>feel the fetus move.</Text></Text>
      </View>
            <View style={[styles.modalBox,{backgroundColor:'#efefef'}]}>
        <Text style={styles.modalTextNumber}>2.</Text>
        <Text style={styles.modalText}>Get <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>comfortable. Lie</Text> on your <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>left side</Text> or sit with your feet propped up.</Text>
      </View>
            <View style={[styles.modalBox]}>
        <Text style={styles.modalTextNumber}>3.</Text>
        <Text style={styles.modalText}>Place your <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>hands on your belly.</Text></Text>
      </View>
            <View style={[styles.modalBox,{backgroundColor:'#efefef'}]}>
        <Text style={styles.modalTextNumber}>4.</Text>
        <Text style={styles.modalText}><Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>Start a timer</Text> or watch the clock.</Text>
      </View>
            <View style={[styles.modalBox]}>
        <Text style={styles.modalTextNumber}>5.</Text>
        <Text style={styles.modalText}><Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>Count</Text> each kick. Keep counting until you get to <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>10 kicks / flutters / swishes / rolls.</Text></Text>
      </View>
            <View style={[styles.modalBox,{backgroundColor:'#efefef',borderBottomLeftRadius:20,borderBottomRightRadius:20}]}>
        <Text style={styles.modalTextNumber}>6.</Text>
        <Text style={styles.modalText}>Once you reach <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>10 kicks, jot down</Text> how many <Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>minutes</Text> it took.</Text>
      </View>
      </View>
    </View>

    </Modal>

    <Modal
    animationType='fade'
    onRequestClose={()=>setLowMovementModal(false)}
    visible={lowMovementModal}
    transparent={true}
    >
      <BlurView experimentalBlurMethod='dimezisBlurView' intensity={4} tint="light" style={styles.modalBlur} />
      <View style={[styles.modalBlur,{backgroundColor:'rgba(0,0,0,0.3)'}]}/>
    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
      <TouchableOpacity
      onPress={()=>setLowMovementModal(false)}
      ><View style={styles.modalClose}>
      <Image
      source={cross}
      />
      </View>
      </TouchableOpacity>
      <View style={styles.modalContentContainer}>
      <View style={[styles.modalTitle]}>
      <Image
      source={info}
      style={{width:24,height:24}}
      />
      <Text style={{marginLeft:12,fontWeight:'700',fontSize:20,fontFamily:'InstrumentSans-Bold'}}>Low Movement detected?</Text>
      </View>
            <View style={[styles.modalBox,{borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:4}]}>
        <Text style={styles.modalTextNumber}>•</Text>
        <Text style={styles.modalText}><Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>Babies sleep too:</Text> Your little one might just be taking a nap (cycles usually last 20-40 minutes).</Text>
      </View>
            <View style={[styles.modalBox,{backgroundColor:'#efefef'}]}>
        <Text style={styles.modalTextNumber}>•</Text>
        <Text style={styles.modalText}><Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>Get comfortable:</Text> Lie down on your left side and relax. This improves blood flow to the baby.</Text>
      </View>
            <View style={[styles.modalBox]}>
        <Text style={styles.modalTextNumber}>•</Text>
        <Text style={styles.modalText}><Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>Wake them up:</Text> Have a cold glass of water or a sweet snack; the sugar or temperature often gets them moving.</Text>
      </View>
            <View style={[styles.modalBox,{backgroundColor:'#efefef'}]}>
        <Text style={styles.modalTextNumber}>•</Text>
        <Text style={styles.modalText}><Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>Try again:</Text> Focus only on the baby for the next hour without distractions.</Text>
      </View>
            <View style={[styles.modalBox,{backgroundColor:'#FFFFFF',borderBottomLeftRadius:20,borderBottomRightRadius:20}]}>
        <Text style={styles.modalTextNumber}>•</Text>
        <Text style={styles.modalText}><Text style={{fontWeight:'700',fontFamily:'InstrumentSans-Bold'}}>Trust your instincts:</Text> If you still don't feel 10 movements in 2 hours, or if you just feel anxious, call your provider. It is always better to get checked for peace of mind.</Text>
      </View>
      </View>
    </View>

    </Modal>
    </View>
  )
}

export default RecordDFM

const styles = StyleSheet.create({
    box:{
        width:horizontalScale(282),
        height:verticalScale(100),
        marginRight: horizontalScale(56),
        marginLeft: horizontalScale(55),
        marginTop:verticalScale(237),
        borderColor:'black',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:moderateScale(16)
    },
    arrow:{
        width:horizontalScale(0),
        height:verticalScale(0),
        borderLeftWidth:horizontalScale(10),
        borderRightWidth:horizontalScale(10),
        borderTopWidth:verticalScale(17),
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
        borderTopColor:'#FFFFFF',
        alignSelf:'center',
        marginBottom:4,
    },
    boxText:{
        fontWeight:'600',
        fontSize:24,
        textAlign:'center',
        fontFamily:'InstrumentSans-SemiBold'
    },
    recordBox:{
        width:horizontalScale(268),
        height:verticalScale(150),  
        borderColor:'#FFFFFF',
        borderWidth:3,
        alignSelf:'center',
        borderRadius:moderateScale(72),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
        
    },
    timer:{
        fontWeight:'700',
        fontSize:40,
        color:'red',
        fontFamily:'InstrumentSans-Bold'
    },
    stopButtonBox:{
        width:horizontalScale(72),
        height:verticalScale(72),
        marginTop:56,
        borderWidth:3,
        borderColor:'#FFFFFF',
        alignSelf:'center',
        borderRadius:100,
        backgroundColor:'#FFFFFF',
        
        alignItems:'center',
        justifyContent:'center'
    },
    stopButton:{
        width:horizontalScale(27.5),
        height:verticalScale(27.5),
        backgroundColor:'black',
        borderRadius:3,
        marginLeft:horizontalScale(5)
    },
    startButton:{
        width:horizontalScale(0),
        height:verticalScale(0),
        borderTopWidth:verticalScale(16.25),
        borderBottomWidth:verticalScale(16.25),
        borderLeftWidth:horizontalScale(27.5),
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor:'transparent',
        borderLeftColor:'black',
        borderRadius:3,
        marginLeft:horizontalScale(5),
        
    },
    save:{
        width:horizontalScale(361),
        height:verticalScale(56),
        borderColor:'black',
        borderWidth:1,
        alignSelf:'center',
        marginTop:verticalScale(40),
        borderRadius:48,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
    },
    modalContainer:{

    },
    modalContentContainer:{
      backgroundColor:'rgba(255, 255, 255, 0.4)',
      borderWidth:1,
      borderColor:'rgba(239, 239, 239, 0.3)',
      borderRadius:20,
      paddingHorizontal:4,
      paddingVertical:4
    },
    modalBox:{
        minHeight:verticalScale(72),
        flexDirection:'row',
        alignItems:'flex-start',
        width:horizontalScale(361),
        backgroundColor:'#FFFFFF',
        paddingVertical:12,
        paddingHorizontal:12
    },
    
    modalBlur:{
      position:'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0
    },
    modalTextNumber:{
      marginRight:8,
      fontSize:16,
      fontFamily:'InstrumentSans-Regular',
      lineHeight:22
    },
    modalText:{
      flex:1,
      fontSize:16,
      fontFamily:'InstrumentSans-Regular',
      lineHeight:22
    },
    modalClose:{
      borderRadius:44,
      height:verticalScale(44),
      width:horizontalScale(44),
      borderWidth:1,
      borderColor:'rgba(239, 239, 239, 0.9)',
      backgroundColor:'rgba(255, 255, 255, 0.3)',
      padding:12,
      marginLeft:horizontalScale(315),
      marginBottom:verticalScale(8),
      alignItems:'center',
      justifyContent:'center'
    },
    modalTitle:{
      minHeight:verticalScale(52),
      flexDirection:'row',
      alignItems:'center',
      width:horizontalScale(361),
      backgroundColor:'#FFFFFF',
      borderRadius:16,
      paddingHorizontal:16
    }
})