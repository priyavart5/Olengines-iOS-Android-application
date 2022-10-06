import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import {slides_onboarding} from '../../Data_Shown';
import Onboarding_item from './Onboarding_item';
import Paginator from './Paginator';


const Onboarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsCanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    return(
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList data={slides_onboarding} 
                    renderItem ={({ item }) => <Onboarding_item item = {item} />}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled
                    keyExtractor={(item => item.id)}
                    onScroll = {Animated.event([{nativeEvent: { contentOffset: { x: scrollX}}}],{
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsCanged}
                    viewabilityConfig={viewConfig}
                    ref = {slidesRef}
                />
            </View>
            <Paginator data={slides_onboarding} scrollX={scrollX} />
        </View>
    );
};

const styles  = StyleSheet.create({
    container : {
        flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
    }
});

export default Onboarding;

