import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name={NAVIGATION.home} component={Home} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
