import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default card = (props) => {
      return (
            <View style={styles.container}>
                  <View style={styles.cardContainer}>
                        <Image source={props.exercise.imageUrl} style={styles.icon}></Image>
                        <Text style={styles.heroText}>{props.exercise.title}</Text>
                  </View>
                  <Text style={styles.duration}>{props.exercise.duration} minutes</Text>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            height: hp(20),
            width: wp(85),
            borderRadius: 10,
            backgroundColor: '#b8d6da',
            padding: 5,
            marginVertical: hp(1),
            elevation: 2,
      },
      cardContainer: {
            height: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(5),
            alignItems: 'center',
      },
      icon: {
            width: wp(25),
            height: wp(25),
      },
      heroText: {
            fontFamily: 'SourceSansPro',
            fontSize: 25,
      },
      duration: {
            fontFamily: 'SourceSansPro',
            width: '100%',
            textAlign: 'right',
            paddingRight: 5,
      },
});
