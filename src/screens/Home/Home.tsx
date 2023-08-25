import React from 'react';
import { View } from 'react-native';
import { styles } from './Home.styles';
import { Button } from '@/components';
import { colors, typography } from '@/theme';
import { strings } from '@/localization';
import { AlternativeFullLogoIcon } from '@/assets';

export function Home(): JSX.Element {
  const handleLogout = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AlternativeFullLogoIcon />
      </View>
      <Button
        testID={strings.home.button}
        title={strings.home.button}
        onPress={handleLogout}
        style={styles.button}
        textStyle={[styles.centerText, typography.button, { color: colors.white }]}
      />
    </View>
  );
}
