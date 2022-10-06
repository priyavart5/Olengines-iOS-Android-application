// import { View, Text , StyleSheet, Dimensions} from 'react-native'
// import React, {useCallback} from 'react';
// import {GestureDetector, Gesture} from 'react-native-gesture-handler'
// import Animated, {Extrapolate, interpolate, useAnimatedStyle,useSharedValue, withSpring } from 'react-native-reanimated';


// const {height:SCREEN_HEIGHT} = Dimensions.get('window');
// const MAX_TTRANSLATE_Y = -SCREEN_HEIGHT + 200;

// const BottomSheet = ()=> {

//     const translateY = useSharedValue(0);
//     const context = useSharedValue({y:0})

//     const scrollTo = useCallback((destination= Number) => {
//         translateY.value = withSpring(destination, { damping: 50 });
//       }, []);

//     const gesture = Gesture.Pan()
//     .onStart(() => {
//         context.value = {y : translateY.value};
//     })
//     .onUpdate((event) => {
//         translateY.value = event.translationY + context.value.y;
//         translateY.value = Math.max(translateY.value , MAX_TTRANSLATE_Y)
//     })
//     .onEnd(() => {
//         if(translateY.value > -SCREEN_HEIGHT /3){
//             scrollTo(0)
//         }else if(translateY.value < -SCREEN_HEIGHT /2.7){
//             scrollTo(MAX_TTRANSLATE_Y)
//         }
//     })

//     const rBottomSheetStyle = useAnimatedStyle(() => {
//         return{
//             transform:[{translateY: translateY.value}],
//         };
//     })

//   return (
//       <GestureDetector gesture={gesture}>
//         <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
//             <View style={styles.line} />
//             <Text>Priyavart vashisht</Text>
//         </Animated.View>
//       </GestureDetector>
//   )
// };

// export default BottomSheet;

// const styles = StyleSheet.create({
//     bottomSheetContainer:{
//         height: SCREEN_HEIGHT,
//         width:'100%',
//         backgroundColor:'#FB574E',
//         position:'absolute',
//         top:SCREEN_HEIGHT,
//         borderRadius: 30
//     },
//     line:{
//         width:75,
//         height:4,
//         backgroundColor:'#fff',
//         alignSelf: 'center',
//         marginVertical:15,
//         borderRadius:2
//     }
// })





