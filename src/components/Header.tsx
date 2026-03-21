import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import { navigationLinks, type NavigationLink } from '../data/mockData';

interface HeaderProps {
  readonly brandName?: string;
}

export function Header({ brandName = 'Velvet Stitch' }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.brand}>{brandName}</Text>

        <View style={styles.navLinks}>
          {navigationLinks.map((link: NavigationLink) => (
            <TouchableOpacity key={link.id} style={styles.navLinkContainer}>
              <Text
                style={[styles.navLink, link.isActive && styles.navLinkActive]}
              >
                {link.label}
              </Text>
              {link.isActive && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartIcon}>🛍️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(251, 249, 249, 0.7)',
    ...Platform.select({
      web: {
        position: 'fixed' as unknown as undefined,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
      },
      default: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      },
    }),
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    maxWidth: 1280,
    marginHorizontal: 'auto',
    width: '100%',
  },
  brand: {
    ...typography.headlineSmall,
    color: colors.primary,
    fontWeight: '700',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xl,
    ...Platform.select({
      web: { display: 'flex' },
      default: { display: 'none' },
    }),
  },
  navLinkContainer: {
    alignItems: 'center',
  },
  navLink: {
    ...typography.titleMedium,
    color: colors.onSurface,
    opacity: 0.8,
  },
  navLinkActive: {
    color: colors.primary,
    opacity: 1,
  },
  activeIndicator: {
    height: 2,
    backgroundColor: colors.primary,
    width: '100%',
    marginTop: 4,
  },
  cartButton: {
    padding: spacing.sm,
  },
  cartIcon: {
    fontSize: 20,
  },
});
