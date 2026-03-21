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
import { featuredCollections, type FeaturedCollection } from '../data/mockData';

interface FeaturedCollectionsProps {
  readonly onCollectionPress?: (id: string) => void;
}

export function FeaturedCollections({
  onCollectionPress,
}: FeaturedCollectionsProps) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.label}>{featuredCollections.sectionLabel}</Text>
            <Text style={styles.title}>{featuredCollections.sectionTitle}</Text>
          </View>
          <Text style={styles.subtitle}>
            {featuredCollections.sectionSubtitle}
          </Text>
        </View>

        <View
          style={[
            styles.grid,
            isLargeScreen ? styles.gridRow : styles.gridColumn,
          ]}
        >
          {featuredCollections.collections.map(
            (collection: FeaturedCollection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                isLarge={collection.variant === 'large' && isLargeScreen}
                onPress={() => onCollectionPress?.(collection.id)}
              />
            )
          )}
        </View>
      </View>
    </View>
  );
}

interface CollectionCardProps {
  readonly collection: FeaturedCollection;
  readonly isLarge: boolean;
  readonly onPress?: () => void;
}

function CollectionCard({ collection, isLarge, onPress }: CollectionCardProps) {
  if (isLarge) {
    return (
      <TouchableOpacity
        style={[styles.card, styles.cardLarge]}
        onPress={onPress}
      >
        <View style={styles.cardLargeImageContainer}>
          <Image
            source={{ uri: collection.image }}
            style={styles.cardLargeImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.cardLargeContent}>
          <Text style={styles.cardTitle}>{collection.title}</Text>
          <Text style={styles.cardDescription}>{collection.description}</Text>
          <View style={styles.ctaRow}>
            <Text style={styles.ctaText}>{collection.cta}</Text>
            <Text style={styles.ctaArrow}>→</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={[styles.card, styles.cardSmall]} onPress={onPress}>
      <View style={styles.cardSmallAvatar}>
        <Image
          source={{ uri: collection.image }}
          style={styles.avatarImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.cardSmallTitle}>{collection.title}</Text>
      <Text style={styles.cardSmallDescription}>{collection.description}</Text>
      <TouchableOpacity>
        <Text style={styles.underlineLink}>{collection.cta}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surfaceContainerLow,
    paddingVertical: spacing.xxxl,
  },
  inner: {
    maxWidth: 1280,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.lg,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: spacing.xxl,
    gap: spacing.md,
  },
  headerText: {
    maxWidth: 560,
  },
  label: {
    ...typography.labelSmall,
    color: colors.primary,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.displayMedium,
    color: colors.onSurface,
    fontSize: 36,
  },
  subtitle: {
    ...typography.labelMedium,
    color: colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  grid: {
    gap: spacing.lg,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridColumn: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  cardLarge: {
    flex: 7,
    backgroundColor: colors.secondaryContainer,
    padding: spacing.xl,
    minHeight: 400,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  cardLargeImageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '66%',
    height: '100%',
    padding: spacing.lg,
  },
  cardLargeImage: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.lg,
  },
  cardLargeContent: {
    maxWidth: 280,
    zIndex: 1,
  },
  cardTitle: {
    ...typography.headlineMedium,
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },
  cardDescription: {
    ...typography.bodyMedium,
    color: colors.onSecondaryContainer,
    opacity: 0.9,
    marginBottom: spacing.md,
  },
  ctaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  ctaText: {
    ...typography.labelLarge,
    color: colors.onSecondaryContainer,
    fontWeight: '600',
  },
  ctaArrow: {
    ...typography.labelLarge,
    color: colors.onSecondaryContainer,
  },
  cardSmall: {
    flex: 5,
    backgroundColor: colors.surfaceContainerHighest,
    padding: spacing.lg,
    minHeight: 320,
    justifyContent: 'center',
    borderLeftWidth: 8,
    borderLeftColor: 'rgba(140, 77, 78, 0.2)',
  },
  cardSmallAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: colors.white,
    marginBottom: spacing.md,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.06,
    shadowRadius: 40,
    elevation: 4,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  cardSmallTitle: {
    ...typography.headlineSmall,
    color: colors.onSurface,
    marginBottom: spacing.sm,
    fontSize: 20,
  },
  cardSmallDescription: {
    ...typography.bodyMedium,
    color: colors.onSurfaceVariant,
    marginBottom: spacing.md,
  },
  underlineLink: {
    ...typography.labelLarge,
    color: colors.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});
