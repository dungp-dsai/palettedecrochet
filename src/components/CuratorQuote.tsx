import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import { curatorQuote } from '../data/mockData';

interface CuratorQuoteProps {
  readonly quote?: string;
  readonly author?: string;
}

export function CuratorQuote({
  quote = curatorQuote.text,
  author = curatorQuote.author,
}: CuratorQuoteProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.icon}>✨</Text>

        <Text style={styles.quote}>{quote}</Text>

        <View style={styles.authorContainer}>
          <View style={styles.divider} />
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: spacing.xxxl,
  },
  inner: {
    maxWidth: 800,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    gap: spacing.lg,
  },
  icon: {
    fontSize: 48,
    color: colors.primary,
  },
  quote: {
    ...typography.headlineMedium,
    color: colors.onSurface,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 44,
    fontSize: 28,
  },
  authorContainer: {
    alignItems: 'center',
    marginTop: spacing.md,
  },
  divider: {
    width: 64,
    height: 1,
    backgroundColor: colors.primary,
    marginBottom: spacing.md,
  },
  author: {
    ...typography.labelMedium,
    color: colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '700',
  },
});
