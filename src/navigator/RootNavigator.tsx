import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { theme } from '@/theme';
import { handleReady, navigationRef } from '@/services';
import { AppNavigator } from './AppNavigator';
import { AnimatedBootSplash } from '@/screens';

export function RootNavigator() {
  const [bootSplashVisible, setBootSplashVisible] = useState(true);

  if (bootSplashVisible) {
    return <AnimatedBootSplash onAnimationEnd={() => setBootSplashVisible(false)} />;
  }

  return (
    <NavigationContainer theme={theme} onReady={handleReady} ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
}
