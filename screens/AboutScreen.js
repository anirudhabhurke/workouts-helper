import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, Linking, TouchableOpacity } from 'react-native';
import { Colors, Images } from '../assets';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';

export default aboutScreen = (props) => {
      return (
            <View style={styles.container}>
                  <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.aboutIcon}>
                        <AntDesign name={'back'} color={Colors.primary} size={30}></AntDesign>
                  </TouchableOpacity>
                  <Text style={styles.header}>About</Text>
                  <Image source={Images.profile} style={styles.profile}></Image>
                  <Text style={styles.title}>Anirudha Bhurke</Text>
                  <Text style={styles.subtitle}>A caffeine dependent web developer</Text>
                  <Text style={[styles.timeTaken, { marginBottom: 10 }]}>Time taken: 2 days</Text>
                  <Text style={[styles.timeTaken, { marginTop: 10 }]}>Pricing: Above 10,000 INR.</Text>
                  <View>
                        <TouchableWithoutFeedback
                              onPress={() => {
                                    Linking.openURL('https://youtu.be/VFrKjhcTAzE');
                              }}
                        >
                              <Text style={styles.siteLink}>Video link for challenge</Text>
                        </TouchableWithoutFeedback>
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.white,
      },
      header: {
            fontFamily: 'SourceSansPro',
            fontSize: 30,
            marginBottom: hp(5),
      },
      profile: {
            width: wp(40),
            height: wp(40),
            borderRadius: 100,
            marginBottom: hp(5),
      },
      title: {
            fontFamily: 'SourceSansPro',
            fontSize: 30,
            marginBottom: hp(1),
      },
      subtitle: {
            fontFamily: 'SourceSansPro',
            fontSize: 20,
      },
      timeTaken: {
            fontFamily: 'SourceSansPro',
            fontSize: 18,
            marginVertical: hp(3),
      },
      siteLink: {
            color: Colors.primary,
            borderColor: Colors.primary,
            fontFamily: 'SourceSansPro',
            fontSize: 18,
            alignSelf: 'center',
            padding: 6,
            borderRadius: 10,
            borderWidth: 0.6,
            marginTop: 5,
      },
      aboutIcon: {
            position: 'absolute',
            top: hp(6),
            left: wp(5),
      },
});
