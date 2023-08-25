import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Welcome.styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '@/constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@/components';
import { strings } from '@/localization';
import { typography } from '@/theme';
import { FullLogoIcon } from '@/assets';

export function Welcome(): JSX.Element {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateToLogin = () => {
    navigate(NAVIGATION.login);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FullLogoIcon style={styles.icon} />
        <Text style={[styles.centerText, typography.subtitle]}>{strings.welcome.title}</Text>
      </View>
      <Button
        testID={strings.welcome.button}
        title={strings.welcome.button}
        onPress={navigateToLogin}
        style={styles.button}
        textStyle={[styles.centerText, typography.button]}
      />
    </View>
  );
}
