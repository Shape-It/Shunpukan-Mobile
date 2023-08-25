import { createNavigationContainerRef } from '@react-navigation/native';
import { createRef } from 'react';

export const routeNameRef = createRef();
export const navigationRef = createNavigationContainerRef();

export const handleReady = () => {
  routeNameRef.current = navigationRef.getCurrentRoute().name;
};

export const handleStateChange = () => {
  const currentRouteName = navigationRef.getCurrentRoute().name;

  routeNameRef.current = currentRouteName;
};
