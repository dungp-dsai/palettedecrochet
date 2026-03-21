import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GalleryHome } from './src/screens';

export default function App() {
  const handleShopPress = () => {
    console.log('Shop pressed');
  };

  const handleCollectionPress = (id: string) => {
    console.log('Collection pressed:', id);
  };

  const handleGalleryItemPress = (id: string) => {
    console.log('Gallery item pressed:', id);
  };

  const handleFooterLinkPress = (id: string) => {
    console.log('Footer link pressed:', id);
  };

  return (
    <View style={styles.container}>
      <GalleryHome
        onShopPress={handleShopPress}
        onCollectionPress={handleCollectionPress}
        onGalleryItemPress={handleGalleryItemPress}
        onFooterLinkPress={handleFooterLinkPress}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf9f9',
  },
});
