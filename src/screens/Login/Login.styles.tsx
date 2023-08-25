import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.s,
  },
  content: {
    flex: 1,
  },
  input: {
    marginTop: spacing.s,
  },
  button: {
    marginTop: 'auto',
    marginVertical: spacing.xl,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: spacing.xs,
    backgroundColor: colors.black,
  },
  centerText: {
    textAlign: 'center',
  },
});
