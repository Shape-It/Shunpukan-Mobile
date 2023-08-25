import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.l,
    backgroundColor: colors.black,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: spacing.m,
  },
  centerText: {
    textAlign: 'center',
  },
  button: {
    marginTop: 'auto',
    marginVertical: spacing.xl,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: spacing.xs,
    backgroundColor: colors.white,
  },
});
