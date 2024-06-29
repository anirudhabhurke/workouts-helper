import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button, Card } from '../components';
import { Colors } from '../assets';
import exerciseList from '../models/exerciseList';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons';

const randomListScreen = (props) => {
      const [filteredExercises, setFilteredExercises] = useState([]);

      useEffect(() => {
            let idArray = [];
            let numberGenerator = (arr) => {
                  if (arr.length >= 5) return;
                  let newNumber = Math.floor(Math.random() * 15 + 1);
                  if (arr.indexOf(newNumber) < 0) {
                        arr.push(newNumber);
                  }
                  numberGenerator(arr);
            };
            numberGenerator(idArray);

            const oldExercises = [...exerciseList];
            const filteredList = oldExercises.filter((exercise) => {
                  if (idArray.includes(exercise.id)) {
                        return exercise;
                  }
            });
            setFilteredExercises(filteredList);
      }, []);

      shuffleExercises = () => {
            let idArray = [];
            let numberGenerator = (arr) => {
                  if (arr.length >= 5) return;
                  let newNumber = Math.floor(Math.random() * 15 + 1);
                  if (arr.indexOf(newNumber) < 0) {
                        arr.push(newNumber);
                  }
                  numberGenerator(arr);
            };
            numberGenerator(idArray);

            const oldExercises = [...exerciseList];
            const filteredList = oldExercises.filter((exercise) => {
                  if (idArray.includes(exercise.id)) {
                        return exercise;
                  }
            });
            setFilteredExercises(filteredList);
      };

      return (
            <View style={styles.container}>
                  <Text style={styles.heroText}>Here are 5 exersises...</Text>
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
                        <TouchableOpacity onPress={shuffleExercises} style={styles.shuffleButton}>
                              <Entypo name={'shuffle'} size={25} color={Colors.secondary}></Entypo>
                        </TouchableOpacity>
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
            marginVertical: 5,
      },
      shuffleButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: Colors.primaryLight,
            borderRadius: 50,
      },
});
