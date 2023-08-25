import { colors, spacing, typography } from '@/theme';
import { normalize } from '@/utils';
import { StyleSheet } from 'react-native';
import { isTablet } from 'react-native-device-info';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.m,
    flexDirection: isTablet() ? 'row' : 'column',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.s,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: isTablet() ? normalize(40) : normalize(60),
    textAlign: 'center',
    marginBottom: spacing.m,
    fontWeight: 'bold',
    color: colors.black,
  },
  banner: {
    color: colors.white,
    borderRadius: spacing.xl,
    marginBottom: spacing.m,
    width: normalize(100),
    paddingVertical: spacing.xs,
  },
  bannerText: {
    textAlign: 'center',
    fontSize: isTablet() ? normalize(10) : normalize(20),
    color: colors.white,
  },
  button: {
    marginTop: 'auto',
    marginBottom: spacing.xs,
    paddingHorizontal: spacing.m,
    paddingVertical: isTablet() ? spacing.xs : spacing.s,
    borderRadius: spacing.xs,
    backgroundColor: colors.black,
  },
  buttonText: {
    ...typography.button,
    color: colors.white,
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  animation: {
    marginTop: isTablet() ? 0 : spacing.m,
    width: 400,
    height: 150,
  },
});
