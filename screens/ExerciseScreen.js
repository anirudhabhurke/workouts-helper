import React from 'react';
import { Text, View, StyleSheet, Image, YellowBox } from 'react-native';
import { Colors, Images } from '../assets';
const { formatTime } = require('../utils');
import { connect } from 'react-redux';
import { Button } from '../components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Audio } from 'expo-av';
YellowBox.ignoreWarnings(['']);
const musicList = {
      1: require('../assets/Music/1.mp3'),
      2: require('../assets/Music/2.mp3'),
      3: require('../assets/Music/3.mp3'),
      4: require('../assets/Music/4.mp3'),
      5: require('../assets/Music/5.mp3'),
};

class ExerciseScreen extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  exerciseList: [],
                  exerciseName: '',
                  status: '',
                  timer: 144,
                  currentPlayingId: 0,
            };
      }

      componentDidMount = () => {
            this.fetchData();
      };

      playSound = async (number, duration) => {
            const soundObject = new Audio.Sound();
            try {
                  let path = musicList[number];
                  await soundObject.loadAsync(path);
                  await soundObject
                        .playAsync()
                        .then(async () => {
                              soundObject.setStatusAsync({ isLooping: true });
                        })
                        .then(async (playbackStatus) => {
                              setTimeout(() => {
                                    soundObject.unloadAsync();
                              }, duration * 1000);
                        })
                        .catch((error) => {});
            } catch (error) {
                  console.log(error);
            }
      };

      fetchData = () => {
            const { filteredExercises } = this.props.route.params;
            const rawExerciseList = filteredExercises.map((ex, index) => {
                  return { title: ex.title, duration: ex.duration * 60, id: index + 1 };
            });
            console.log(rawExerciseList);
            const exerciseList = [];
            for (let i = 0; i < rawExerciseList.length; i++)
                  for (let j = 0; j < this.props.setCount; j++) {
                        exerciseList.push({
                              ...rawExerciseList[i],
                              currentSet: j + 1,
                        });
                        exerciseList.push({
                              id: 404,
                              title: 'Break',
                              duration: 40,
                        });
                  }
            exerciseList.pop();
            this.setState({ exerciseList }, () => {
                  this.setTimer(0, exerciseList.length);
            });
      };

      setTimer = (index, count) => {
            this.setState(
                  {
                        exerciseName: this.state.exerciseList[index].title,
                        status: this.state.exerciseList[index].currentSet
                              ? `Set ${this.state.exerciseList[index].currentSet} / ${this.props.setCount}`
                              : '',
                        timer: this.state.exerciseList[index].duration,
                        currentPlayingId: this.state.exerciseList[index].id,
                  },
                  () => {
                        if (this.state.exerciseList[index].id !== 404) {
                              this.playSound(this.state.exerciseList[index].id, this.state.exerciseList[index].duration);
                        }
                        const clockCall = setInterval(() => {
                              this.setState(
                                    (prevstate) => ({
                                          timer: prevstate.timer - 1,
                                    }),
                                    () => {
                                          if (this.state.timer === 0) {
                                                clearInterval(clockCall);
                                                count = count - 1;
                                                if (count !== 0) {
                                                      index = index + 1;
                                                      this.setTimer(index, count);
                                                }
                                          }
                                    }
                              );
                        }, 1000);
                  }
            );
      };

      render() {
            let Cmp = (
                  <View style={styles.container}>
                        <Text style={styles.titletext}>{this.state.exerciseName}</Text>
                        <Text style={styles.counttext}>{this.state.status}</Text>
                        <View style={styles.durationBox}>
                              <Text style={styles.durationtext}>{formatTime(this.state.timer)}</Text>
                        </View>
                        <Text style={styles.playingtext}>Now Playing</Text>
                        {this.state.currentPlayingId !== 404 ? (
                              <Text style={styles.audiotext}>Music {this.state.currentPlayingId.toString()}</Text>
                        ) : (
                              <Text style={styles.audiotext}>Nothing</Text>
                        )}
                  </View>
            );

            if (!this.state.timer) {
                  Cmp = (
                        <View style={styles.container}>
                              <Image source={Images.winner} style={styles.winnerImage}></Image>
                              <Text style={styles.doneText}>Horray...</Text>
                              <Text style={styles.doneText}>you are done for today</Text>
                              <Button
                                    title={'BACK HOME'}
                                    style={styles.homeButton}
                                    onPress={() => this.props.navigation.replace('IntroScreen')}
                              ></Button>
                        </View>
                  );
            }

            return Cmp;
      }
}

const mapStateToProps = (state) => {
      return {
            setCount: state.setCount,
      };
};

export default connect(mapStateToProps)(ExerciseScreen);

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.white,
      },
      durationBox: {
            backgroundColor: Colors.primary,
            width: wp(50),
            height: wp(50),
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
      },
      titletext: {
            fontSize: 40,
            color: Colors.secondary,
            fontFamily: 'SourceSansPro',
            marginVertical: hp(1),
      },
      counttext: {
            fontSize: 30,
            color: Colors.primary,
            fontFamily: 'SourceSansPro',
            marginBottom: hp(6),
      },
      durationtext: {
            fontSize: 60,
            color: Colors.white,
            fontWeight: 'bold',
            fontFamily: 'SourceSansPro',
      },
      playingtext: {
            fontSize: 20,
            color: Colors.secondary,
            fontFamily: 'SourceSansPro',
            marginTop: hp(5),
      },
      audiotext: {
            fontSize: 25,
            color: Colors.primary,
            fontFamily: 'SourceSansPro',
            marginVertical: hp(1),
      },
      doneText: {
            fontSize: 30,
            color: Colors.primary,
            fontFamily: 'SourceSansPro',
            textAlign: 'left',
            width: wp(80),
      },
      homeButton: {
            width: wp(50),
            marginTop: hp(10),
      },
      winnerImage: {
            width: wp(40),
            height: wp(40),
            marginBottom: hp(5),
      },
});
