import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import DatePicker from 'react-native-modern-datepicker';

export default DateMaskModernPicker = () => {
  const [date, setDate] = useState();
  const textInputRef = useRef();
  
  const dayArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const validCheck = (date) => {
    var arr = date.split('/');
    var yyyyStr = arr.length > 0 ? arr[0] : '';
    var mmStr = arr.length > 1 ? arr[1] : '';
    var ddStr = arr.length > 2 ? arr[2] : '';


    if (!date) setDate('');
    if (yyyyStr == '0000' || mmStr == '00' || ddStr == '00') return;

    var yyyyInt = parseInt(yyyyStr);      
    var mmInt = parseInt(mmStr);
    var ddInt = parseInt(ddStr);
    var isLeap = new Date(yyyyInt, 1, 29).getDate() === 29 ? true : false;
    
    if (mmInt > 12) return;
    if(isLeap){
      if(mmInt == 2 && ddInt > 29) return;
    }
    else if (ddInt > dayArr[mmInt - 1]) return;
    
    setDate(date);
    if(date.length == 10) Alert.alert('Date from TextInput: ', date)    
  }

  const setDateFromPicker = (dateStr) => {        
    setDate(dateStr);
    Alert.alert('Date from DatePicker: ', dateStr);
  }

  return (
    <>
      <SafeAreaView>
        <View style={{ width: 300, height: 50, margin: 30, borderWidth: 1 }}>
          <TextInputMask
            ref={ref => textInputRef.current = ref}
            type={'datetime'}
            options={{
              format: 'YYYY/MM/DD'
            }}
            value={date}
            onChangeText={text => {
              validCheck(text);
            }}
            placeholder='2020/04/15'
          />
        </View>
        <DatePicker 
          onDateChange={dateStr=>setDateFromPicker(dateStr)}
        />
      </SafeAreaView>
    </>
  );
};
