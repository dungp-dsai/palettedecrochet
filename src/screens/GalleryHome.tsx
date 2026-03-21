import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  Header,
  Hero,
  FeaturedCollections,
  Gallery,
  CuratorQuote,
  Footer,
} from '../components';
import { colors } from '../theme/colors';

interface GalleryHomeProps {
  readonly onShopPress?: () => void;
  readonly onCollectionPress?: (id: string) => void;
  readonly onGalleryItemPress?: (id: string) => void;
  readonly onFooterLinkPress?: (id: string) => void;
}

export function GalleryHome({
  onShopPress,
  onCollectionPress,
  onGalleryItemPress,
  onFooterLinkPress,
}: GalleryHomeProps) {
  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Hero onShopPress={onShopPress} onCollectionPress={onCollectionPress} />

        <FeaturedCollections onCollectionPress={onCollectionPress} />

        <Gallery onItemPress={onGalleryItemPress} />

        <CuratorQuote />

        <Footer onLinkPress={onFooterLinkPress} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
  },
});
