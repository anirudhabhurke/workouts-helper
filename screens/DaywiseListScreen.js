import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { Button, Card } from '../components';
import { Colors, Images } from '../assets';
import exerciseList from '../models/exerciseList';
import { daywiseList, getToday } from '../models/daywiseList';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const randomListScreen = (props) => {
      const [filteredExercises, setFilteredExercises] = useState([]);
      const [isSunday, setSunday] = useState(false);

      useEffect(() => {
            const idArray = daywiseList();
            if (!idArray) {
                  setSunday(true);
            } else {
                  const oldExercises = [...exerciseList];
                  const filteredList = oldExercises.filter((exercise) => {
                        if (idArray.includes(exercise.id)) {
                              return exercise;
                        }
                  });
                  setFilteredExercises(filteredList);
            }
      }, []);

      if (isSunday) {
            return (
                  <View style={[styles.container, { justifyContent: 'center' }]}>
                        <Text style={styles.sundayText}>Today is Sunday...</Text>
                        <Text style={styles.sundayText2}>Have some rest</Text>
                        <Image source={Images.sunday} style={styles.sundayImage}></Image>
                  </View>
            );
      }

      return (
            <View style={styles.container}>
                  <Text style={styles.heroText}>Exersises for {getToday()}</Text>
                  <View style={styles.exerciseListView}>
                        <FlatList
                              data={filteredExercises}
                              keyExtractor={(item) => item.id.toString()}
                              renderItem={({ item }) => {
                                    return <Card exercise={item}></Card>;
                              }}
                              showsVerticalScrollIndicator={false}
                        ></FlatList>
                  </View>
                  <View style={styles.bottomView}>
                        <Button
                              title={'START'}
                              onPress={() => {
                                    props.navigation.replace('ExerciseScreen', { filteredExercises: filteredExercises });
                              }}
                        ></Button>
                  </View>
            </View>
      );
};

export default randomListScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: Colors.white,
      },
      sundayText: {
            fontFamily: 'SourceSansPro',
            width: '80%',
            textAlign: 'center',
            borderBottomWidth: 1,
            fontSize: 30,
            padding: 8,
            borderColor: Colors.primaryDark,
            color: Colors.primaryDark,
      },
      sundayText2: {
            fontFamily: 'SourceSansPro',
            fontSize: 25,
            color: Colors.primaryDark,
            padding: 5,
      },
      sundayImage: {
            width: wp(35),
            height: wp(35),
            marginTop: 25,
      },
      heroText: {
            fontSize: 25,
            marginTop: hp(8),
            marginBottom: hp(3),
            fontFamily: 'SourceSansPro',
      },
      exerciseListView: {
            flex: 12,
      },
      bottomView: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
            padding: 10,
            margin: 5,
      },
      shuffleButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: Colors.primaryLight,
            borderRadius: 50,
      },
});
