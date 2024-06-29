import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Images } from '../assets';
import { SelectButton, Slider, Button } from '../components';
import { Colors } from '../assets';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { Octicons } from '@expo/vector-icons';

const introScreen = (props) => {
      const [selectedValue, setSelectedValue] = useState('random');

      selectOption = (value) => {
            setSelectedValue(value);
      };

      return (
            <View style={styles.container}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('AboutScreen')} style={styles.aboutIcon}>
                        <Octicons name={'info'} color={Colors.primary} size={30}></Octicons>
                  </TouchableOpacity>
                  <Image source={Images.workoutLogoTransparent} style={styles.heroImage} />
                  <Text style={styles.dividerText}>SELECT MODE</Text>
                  <View style={styles.selectOptionsContainer}>
                        <SelectButton
                              selected={selectedValue === 'random' ? true : false}
                              title={'RANDOM'}
                              onPress={() => {
                                    selectOption('random');
                              }}
                        />
                        <SelectButton
                              selected={selectedValue === 'daywise' ? true : false}
                              title={'DAYWISE'}
                              onPress={() => {
                                    selectOption('daywise');
                              }}
                        />
                  </View>
                  <Text style={styles.dividerText}>NUMBER OF SETS ({props.setCount})</Text>
                  <Slider
                        value={props.setCount}
                        onValueChange={(value) => {
                              props.setStateCount(value);
                        }}
                  />
                  <Button
                        title={'GET STARTED'}
                        onPress={() => {
                              props.navigation.replace(selectedValue === 'daywise' ? 'DaywiseListScreen' : 'RandomListScreen');
                        }}
                        style={styles.startButton}
                  />
            </View>
      );
};

const mapStateToProps = (state) => {
      return {
            setCount: state.setCount,
      };
};

const mapDispatchToProps = (dispatch) => {
      return {
            setStateCount: (value) => {
                  dispatch({ type: 'SET_SETCOUNT', value: value });
            },
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(introScreen);

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: Colors.white,
      },
      heroImage: {
            width: wp(50),
            height: wp(50),
            marginTop: hp(10),
      },
      dividerText: {
            width: '100%',
            height: 20,
            textAlignVertical: 'center',
            paddingLeft: '7%',
            marginVertical: 10,
            fontWeight: 'bold',
            backgroundColor: Colors.white,
            fontFamily: 'SourceSansPro',
      },
      selectOptionsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '90%',
            marginVertical: hp(1),
      },
      startButton: {
            marginTop: hp(10),
            width: wp(50),
      },
      aboutIcon: {
            position: 'absolute',
            top: 40,
            right: 20,
      },
});
