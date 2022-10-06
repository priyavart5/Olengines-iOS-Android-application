import { View, Text, StyleSheet, Animated, useWindowDimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const Paginator = ({ data, scrollX, item }) => {

    const {width} = useWindowDimensions();

  return (
    <>
    <View style={styles.paginator_dot}>
        <View style={{flexDirection: 'row', height: 64}}>
        {data.map((_,i) => {
            const inputRange = [(i-1) * width, i * width, (i + 1) * width];

            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [7,15,7],
                extrapolate: 'clamp',
            })

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3,1,0.3],
                extrapolate: 'clamp',
            })
            return <Animated.View style={[styles.dot, {width: dotWidth,opacity}]} key= { i.toString() } />;
        })}
        </View>
    </View>
    </>
  );
};

const styles= StyleSheet.create({
    dot: {
        marginTop: -15,
        height: 7,
        borderRadius: 10 ,
        backgroundColor: '#FF3A3A',
        marginHorizontal:3
    },
    paginator_dot : {
        alignItems: 'center'

    }
});

export default Paginator;
