import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';
import { heroContent } from '../data/mockData';

interface HeroProps {
  readonly onShopPress?: () => void;
  readonly onCollectionPress?: () => void;
}

export function Hero({ onShopPress, onCollectionPress }: HeroProps) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return (
    <View style={styles.container}>
      <View style={styles.gradientOverlay} />

      <View
        style={[
          styles.content,
          isLargeScreen ? styles.contentRow : styles.contentColumn,
        ]}
      >
        <View style={styles.textContent}>
          <Text style={styles.title}>
            {heroContent.title}
            {'\n'}
            <Text style={styles.titleAccent}>{heroContent.titleAccent}</Text>
          </Text>

          <Text style={styles.description}>{heroContent.description}</Text>

          <View style={styles.ctaContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={onShopPress}
            >
              <Text style={styles.primaryButtonText}>
                {heroContent.primaryCta}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={onCollectionPress}
            >
              <Text style={styles.secondaryButtonText}>
                {heroContent.secondaryCta}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: heroContent.heroImage }}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.blurCircle} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 600,
    paddingTop: 100,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
    position: 'relative',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.secondaryContainer,
    opacity: 0.3,
  },
  content: {
    maxWidth: 1280,
    marginHorizontal: 'auto',
    width: '100%',
    gap: spacing.xl,
    zIndex: 1,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentColumn: {
    flexDirection: 'column',
  },
  textContent: {
    flex: 1,
    gap: spacing.lg,
    maxWidth: 560,
  },
  title: {
    ...typography.displayLarge,
    color: colors.onSurface,
    lineHeight: 64,
  },
  titleAccent: {
    fontStyle: 'italic',
    color: colors.primary,
  },
  description: {
    ...typography.bodyLarge,
    color: colors.onSurfaceVariant,
    lineHeight: 28,
  },
  ctaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.md,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.06,
    shadowRadius: 40,
    elevation: 4,
  },
  primaryButtonText: {
    ...typography.labelLarge,
    color: colors.onPrimary,
    fontWeight: '500',
  },
  secondaryButton: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  secondaryButtonText: {
    ...typography.labelLarge,
    color: colors.primary,
    fontWeight: '500',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  imageWrapper: {
    aspectRatio: 4 / 5,
    width: '100%',
    maxWidth: 400,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    transform: [{ rotate: '2deg' }],
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.06,
    shadowRadius: 40,
    elevation: 4,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  blurCircle: {
    position: 'absolute',
    bottom: -40,
    left: -40,
    width: 192,
    height: 192,
    borderRadius: 96,
    backgroundColor: colors.primaryContainer,
    opacity: 0.2,
    zIndex: -1,
  },
});
