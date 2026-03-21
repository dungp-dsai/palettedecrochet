import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import { footerContent, type FooterLink } from '../data/mockData';

interface FooterProps {
  readonly onLinkPress?: (id: string) => void;
}

export function Footer({ onLinkPress }: FooterProps) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inner,
          isLargeScreen ? styles.innerRow : styles.innerColumn,
        ]}
      >
        <View style={styles.brandSection}>
          <Text style={styles.brand}>{footerContent.brandName}</Text>
          <Text style={styles.copyright}>{footerContent.copyright}</Text>
        </View>

        <View style={styles.links}>
          {footerContent.links.map((link: FooterLink) => (
            <TouchableOpacity
              key={link.id}
              onPress={() => onLinkPress?.(link.id)}
            >
              <Text style={styles.link}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.socialIcons}>
          <Text style={styles.socialIcon}>❤️</Text>
          <Text style={styles.socialIcon}>📷</Text>
          <Text style={styles.socialIcon}>☁️</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surfaceContainerLow,
    paddingVertical: spacing.xl,
  },
  inner: {
    maxWidth: 1280,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.lg,
    width: '100%',
    gap: spacing.lg,
    alignItems: 'center',
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  brandSection: {
    gap: spacing.xs,
  },
  brand: {
    ...typography.titleMedium,
    color: colors.primary,
    fontStyle: 'italic',
  },
  copyright: {
    ...typography.labelSmall,
    color: colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    justifyContent: 'center',
  },
  link: {
    ...typography.labelMedium,
    color: colors.onTertiaryFixedVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  socialIcon: {
    fontSize: 20,
  },
});
