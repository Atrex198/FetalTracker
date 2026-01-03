import {Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

const initialWidth: number = 393;
const initialHeight: number = 852;

export const horizontalScale = (size:number):number=>{
    return (width/initialWidth)*size;
}

export const verticalScale = (size:number):number=>{
    return (height/initialHeight)*size;
}

export const moderateScale = (size: number, factor: number = 0.5): number => 
  size + (horizontalScale(size) - size) * factor;