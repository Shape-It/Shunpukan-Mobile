import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { normalize } from '@/utils';
import { colors, spacing } from '@/theme';
import { EyeCloseIcon, EyeIcon } from '@/assets';

interface TextField {
  onBlur?: any;
  onFocus?: any;
  placeholder: string;
  value: string | undefined;
  secureTextEntry?: boolean;
  accesibilityHint?: string;
  accesibilityLabel?: string;
  autoComplete?: string;
  keyboardType?: string;
  autoCapitalize?: string;
  onChangeText?: any;
  textContentType: string;
  testID?: string;
  style: any;
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: colors.gray600,
    padding: normalize(12),
  },
  inputContainer: {
    minHeight: normalize(60),
    borderColor: colors.gray300,
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    paddingHorizontal: spacing.s,
  },
  toggleIcon: {
    height: spacing.m,
  },
});

export const TextField: React.FC<TextField> = ({
  placeholder,
  value,
  style,
  secureTextEntry,
  accesibilityHint,
  accesibilityLabel,
  testID,
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(!!secureTextEntry);

  const togglePasswordIcon = isSecureTextEntry ? <EyeCloseIcon /> : <EyeIcon />;

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry((current) => !current);
  };

  return (
    <View style={style}>
      <View style={styles.inputContainer}>
        <TextInput
          testID={testID}
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.gray400}
          secureTextEntry={isSecureTextEntry}
          accessibilityHint={accesibilityHint ?? placeholder}
          accessibilityLabel={accesibilityLabel}
        />
        {secureTextEntry && (
          <TouchableOpacity
            accessibilityRole="imagebutton"
            onPress={toggleSecureTextEntry}
            style={styles.toggle}
          >
            {togglePasswordIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
