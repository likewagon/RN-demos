import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

export default function MyCarousel() {
  const entries = [
    { name: 'Shelbie' },
    { name: 'Finnlay' },
    { name: 'Kian' },
    { name: '1Shelbie' },
    { name: '1Finnlay' },
    { name: '1Kian' },
    { name: '2Shelbie' },
    { name: '2Kian' },
  ]

  const [activeSlide, setActiveSlide] = React.useState(0);

  function _renderItem({ item, index }) {
    return (
      <View style={{ width: 200, height: 200, marginTop: 100, borderWidth: 1 }}>
        <Text>{item.name}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ width: 300, height: 500 }}>
      <Carousel
        data={entries}
        sliderWidth={300}
        itemWidth={200}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </SafeAreaView>
  );
}