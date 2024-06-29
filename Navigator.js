import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen, RandomListScreen, DaywiseListScreen, ExerciseScreen, AboutScreen } from './screens';

const Stack = createStackNavigator();

export default navigator = (props) => {
      return (
            <NavigationContainer>
                  <Stack.Navigator headerMode={'none'}>
                        <Stack.Screen name='IntroScreen' component={IntroScreen} />
                        <Stack.Screen name='AboutScreen' component={AboutScreen} />
                        <Stack.Screen name='RandomListScreen' component={RandomListScreen} />
                        <Stack.Screen name='DaywiseListScreen' component={DaywiseListScreen} />
                        <Stack.Screen name='ExerciseScreen' component={ExerciseScreen} />
                  </Stack.Navigator>
            </NavigationContainer>
      );
};
