import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  Text,
  TextInput,
  FlatList
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

export default function PickerSelect() {

  const sources = [
    { label: 'Income Envelop 1', value: 'Income Envelop 1' },
    { label: 'Income Envelop 2', value: 'Income Envelop 2' },
    { label: 'Income Envelop 3', value: 'Income Envelop 3' },
  ];
  const [source, setSource] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.pickerPart}>
        <RNPickerSelect
          style={{ inputIOS: { fontSize: 16 } }}
          items={sources}
          value={source}
          onValueChange={(value) => setSource(value)}
        />
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },  
  pickerPart: {
    width: '60%',
    height: 50,
    justifyContent: 'center',    
    marginTop: 50,
    borderWidth: 1
  }  
});