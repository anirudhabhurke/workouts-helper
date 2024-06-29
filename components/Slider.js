import React from 'react';
import { Text, View, StyleSheet, Slider } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../assets';

export default slider = (props) => {
      return (
            <View style={styles.sliderView}>
                  <Text style={{ fontFamily: 'SourceSansPro' }}>2</Text>
                  <Slider
                        style={{ width: '90%', height: 25 }}
                        minimumValue={2}
                        maximumValue={6}
                        minimumTrackTintColor={Colors.primary}
                        maximumTrackTintColor='#000000'
                        thumbTintColor={Colors.primary}
                        onValueChange={(value) => props.onValueChange(value)}
                        value={props.value}
                        step={1}
                  />
                  <Text style={{ fontFamily: 'SourceSansPro' }}>6</Text>
            </View>
      );
};

const styles = StyleSheet.create({
      sliderView: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: hp(2),
            marginHorizontal: wp(10),
      },
});
