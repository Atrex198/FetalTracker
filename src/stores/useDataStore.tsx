import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';


interface recordData{
date:string,
day:string,
time:string
}

interface data{
records: recordData[],
setRecords:(newRecord:recordData)=>void,
modalVisible: boolean,
setModalVisible:(visible:boolean)=>void,
seconds: number,
setSeconds:(seconds:number)=>void,
start: boolean,
setStart:(start:boolean)=>void,
}

const useDataStore = create<data>()(persist((set)=>({

records:[],

setRecords:(recordData)=>set((state)=>({
    records: [recordData,...state.records]
})),

modalVisible: false,

setModalVisible:(visible)=>set({modalVisible: visible}),

seconds: 0,

setSeconds:(seconds)=>set({seconds}),

start: false,

setStart:(start)=>set({start})



}),
{
    name:'storage',
    storage:createJSONStorage(()=>AsyncStorage)
}
)
);

export default useDataStore

