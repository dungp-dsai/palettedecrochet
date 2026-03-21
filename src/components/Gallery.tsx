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
import { galleryItems, type GalleryItem } from '../data/mockData';

interface GalleryProps {
  readonly title?: string;
  readonly onItemPress?: (id: string) => void;
}

export function Gallery({
  title = 'Masterpiece Spotlight',
  onItemPress,
}: GalleryProps) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>

        {isLargeScreen ? (
          <View style={styles.gridDesktop}>
            <View style={styles.gridLeft}>
              <GalleryCard
                item={galleryItems[0]}
                style={styles.cardLarge}
                onPress={() => onItemPress?.(galleryItems[0].id)}
              />
            </View>
            <View style={styles.gridMiddle}>
              <GalleryCard
                item={galleryItems[1]}
                style={styles.cardSmallTop}
                onPress={() => onItemPress?.(galleryItems[1].id)}
              />
              <GalleryCard
                item={galleryItems[3]}
                style={styles.cardSmallBottom}
                onPress={() => onItemPress?.(galleryItems[3].id)}
              />
            </View>
            <View style={styles.gridRight}>
              <GalleryCard
                item={galleryItems[2]}
                style={styles.cardTall}
                onPress={() => onItemPress?.(galleryItems[2].id)}
              />
            </View>
          </View>
        ) : (
          <View style={styles.gridMobile}>
            {galleryItems.map((item: GalleryItem) => (
              <GalleryCard
                key={item.id}
                item={item}
                style={styles.cardMobile}
                onPress={() => onItemPress?.(item.id)}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

interface GalleryCardProps {
  readonly item: GalleryItem;
  readonly style?: object;
  readonly onPress?: () => void;
}

function GalleryCard({ item, style, onPress }: GalleryCardProps) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.xxxl,
    backgroundColor: colors.background,
  },
  inner: {
    maxWidth: 1280,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.lg,
    width: '100%',
  },
  title: {
    ...typography.headlineLarge,
    color: colors.onSurface,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: spacing.xxl,
  },
  gridDesktop: {
    flexDirection: 'row',
    gap: spacing.md,
    height: 600,
  },
  gridLeft: {
    flex: 2,
  },
  gridMiddle: {
    flex: 1,
    gap: spacing.md,
  },
  gridRight: {
    flex: 1,
  },
  gridMobile: {
    gap: spacing.md,
  },
  card: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    backgroundColor: colors.surfaceContainer,
    position: 'relative',
  },
  cardLarge: {
    flex: 1,
  },
  cardSmallTop: {
    flex: 1,
    backgroundColor: 'rgba(250, 169, 169, 0.1)',
  },
  cardSmallBottom: {
    flex: 1,
    backgroundColor: 'rgba(250, 220, 210, 0.2)',
  },
  cardTall: {
    flex: 1,
  },
  cardMobile: {
    height: 280,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  cardTitle: {
    ...typography.headlineSmall,
    color: colors.white,
    fontSize: 18,
  },
});
