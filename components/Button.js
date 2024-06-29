import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../assets';
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default button = (props) => {
      return (
            <TouchableOpacity style={[styles.button, { ...props.style }]} onPress={props.onPress}>
                  <Text style={styles.text}>{props.title}</Text>
                  <AntDesign name={'arrowright'} color={Colors.white} size={22} />
            </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
      button: {
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.secondary,
            paddingVertical: 12,
            paddingHorizontal: 5,
            width: wp(35),
            justifyContent: 'space-around',
      },
      text: {
            fontSize: 18,
            fontWeight: 'bold',
            color: Colors.white,
            fontFamily: 'SourceSansPro',
      },
});
