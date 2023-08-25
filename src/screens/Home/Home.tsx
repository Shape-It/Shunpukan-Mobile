import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Home.styles';
import { Button } from '@/components';
import { AlternativeFullLogoIcon } from '@/assets';
import { ALL_KATAS, EASY_KATAS, HARD_KATAS, LEVELS, MEDIUM_KATAS } from '@/constants';
import LottieView from 'lottie-react-native';
import { colors } from '@/theme';
import { strings } from '@/localization';

export function Home(): JSX.Element {
  const [kata, setKata] = useState<string>(strings.home.title);
  const [color, setColor] = useState<string>();
  const [level, setLevel] = useState<string>(LEVELS.easy);
  const [textColor, setTextColor] = useState<string>(colors.white);
  const [isAnimationVisible, setIsAnimationVisible] = useState<boolean>(true);

  const onPressRandomKata = (katasList: Array<string>) => {
    setIsAnimationVisible(false);
    let randomKata = katasList[Math.floor(Math.random() * katasList.length)];
    while (kata === randomKata) {
      randomKata = katasList[Math.floor(Math.random() * katasList.length)];
    }
    setKata(randomKata);
  };

  useEffect(() => {
    if (EASY_KATAS.find((value) => value === kata)) {
      setColor(colors.green);
      setLevel(LEVELS.easy);
      setTextColor(colors.white);
    }
    if (MEDIUM_KATAS.find((value) => value === kata)) {
      setColor(colors.yellow);
      setLevel(LEVELS.medium);
      setTextColor(colors.black);
    }
    if (HARD_KATAS.find((value) => value === kata)) {
      setColor(colors.beta100);
      setLevel(LEVELS.hard);
      setTextColor(colors.white);
    }
  }, [kata]);

  const freshStart = () => {
    setKata(strings.home.title);
    setColor(undefined);
    setTextColor(colors.white);
    setIsAnimationVisible(true);
  };

  const renderAnimation = () => {
    if (isAnimationVisible) {
      return (
        <LottieView
          source={require('@/assets/animations/animation.json')}
          autoPlay={isAnimationVisible}
          loop={false}
          style={styles.animation}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={freshStart} activeOpacity={0.9}>
        {color && (
          <View style={[styles.banner, { backgroundColor: color }]}>
            <Text style={[styles.bannerText, { color: textColor }]}>{level}</Text>
          </View>
        )}
        <Text style={styles.title}>{kata}</Text>
        {renderAnimation()}
      </TouchableOpacity>
      <View style={styles.buttons}>
        <Button
          title={LEVELS.easy}
          onPress={() => onPressRandomKata(EASY_KATAS)}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title={LEVELS.medium}
          onPress={() => onPressRandomKata(MEDIUM_KATAS)}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title={LEVELS.hard}
          onPress={() => onPressRandomKata(HARD_KATAS)}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title={strings.home.button}
          onPress={() => onPressRandomKata(ALL_KATAS)}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <AlternativeFullLogoIcon style={{ alignSelf: 'center' }} />
      </View>
    </View>
  );
}
