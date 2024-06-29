import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, Animated, View } from 'react-native';
import { Colors } from '../assets';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default selectButton = (props) => {
      const [selectAnimWidth] = useState(new Animated.Value(props.selected ? wp(30) : wp(28)));
      const [selectAnimHeight] = useState(new Animated.Value(props.selected ? hp(7.5) : hp(7)));

      // // note: For componentDidUpdate replacement, skipping initial render
      // const firstUpdate = useRef(true);
      // useLayoutEffect(() => {
      //       if (firstUpdate.current) {
      //             firstUpdate.current = false;
      //             return;
      //       }
      //       toggleAnimation();
      // });

      useEffect(() => {
            toggleAnimation();
      });

      const toggleAnimation = () => {
            if (props.selected) {
                  Animated.timing(selectAnimWidth, {
                        toValue: wp(30),
                        timing: 500,
                  }).start();
                  Animated.timing(selectAnimHeight, {
                        toValue: hp(7.5),
                        timing: 500,
                  }).start();
            } else {
                  Animated.timing(selectAnimWidth, {
                        toValue: wp(28),
                        timing: 500,
                  }).start();
                  Animated.timing(selectAnimHeight, {
                        toValue: hp(7),
                        timing: 500,
                  }).start();
            }
      };

      const animatedStyle = {
            width: selectAnimWidth,
            height: selectAnimHeight,
      };

      return (
            <TouchableOpacity onPress={props.onPress}>
                  <Animated.View
                        style={[
                              props.selected ? styles.selected : styles.unselected,
                              { ...styles.button, ...props.style, ...animatedStyle },
                        ]}
                  >
                        <Text style={[props.selected ? styles.selectedText : styles.unselectedText, { ...styles.text }]}>
                              {props.title}
                        </Text>
                  </Animated.View>
            </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
      button: {
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
      },
      selected: {
            backgroundColor: Colors.primaryLight,
      },
      unselected: {
            borderWidth: 2,
            borderColor: Colors.primaryLight,
      },
      text: {
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'SourceSansPro',
      },
});
