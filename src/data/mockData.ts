export const navigationLinks = [
  { id: 'gallery', label: 'Gallery', href: '#', isActive: true },
  { id: 'story', label: 'Story', href: '#', isActive: false },
  { id: 'collection', label: 'Collection', href: '#', isActive: false },
] as const;

export const heroContent = {
  title: 'Sugar, Spice, &',
  titleAccent: 'Crochet Nice',
  description:
    'A nostalgic tribute to the Townsville heroes. Hand-hooked masterpieces that blend childhood icons with high-end editorial aesthetics.',
  primaryCta: 'Shop The Trio',
  secondaryCta: 'View Collection',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEqERrCHrsr_hmvtR7KT7GmA5XWFZsNDU-91xzTb5VKuF7h7mWr1izkimQoZRV7EE-A3WQcylsJMwgSlf4EGnRU1Iem1-ra7FMkJmfRM3gB5PoQno9qP9AKN6_ZGNuw3XCBqNvNzyZiX8Z94jDZ44YO1aThkQ2lgmo9G_yeJkIqd6Nhap3hN-kktGEPbKVqx8vezq6nIYSAWRF-vXD3d3qm8-RKKlZzRBdzdup-8EhbXHT3qv063vH8lzRo_39Xi4pYgj0-ZI34A',
} as const;

export const featuredCollections = {
  sectionLabel: 'Curated Series',
  sectionTitle: 'The Townsville Trio',
  sectionSubtitle: 'Limited Edition 2024',
  collections: [
    {
      id: 'chemical-x',
      title: 'Chemical X Edit',
      description:
        'A whimsical journey through the vibrant hues of Blossom, Bubbles, and Buttercup.',
      cta: 'View Series',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-wkRYV8puDI7wCcA3viKTlCNAzMfogkzTwgbGU_cpEpqaUtLKCYHAKnQqqmEpNZcOdk0Lf4IcXCR8Iq9DYIX5uJsz5xplrfjhfnIW0E7GAJAwW5vII945arC2YBauIDPDt9r7wieobOjkRg2diQGR25TiR_aqulz1PzmDeCr7QHAWzOM1haN5HibFLJdq5PC6huW9fp5wXhCWSyUGZqXPKlqGzoXVlDkcBlYzD63qORwxn0g7YSiJW0L0vYj9cEgqocUm80TaXw',
      variant: 'large',
    },
    {
      id: 'villains',
      title: 'The Villains Gallery',
      description:
        'Intricate amigurumi of Mojo Jojo and HIM, crafted with soul and precision.',
      cta: 'Discover Villains',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-RcGINM8GKMvz2OXnzgvw4NFoRGk1dsQvdRxQEZqrZ2GB5K_gy6ulXaAnwS_bGCh0wcoqIvHUljh3SoajlWguwyTCoZwh22gzuCH2xGRzkAxl4_I-6Ck1C9ewqwdaT3LbBY_T8j7G_a8spAIdOykTAUuPR2tEPvSRSF5qvOR3tFXuImjRMfQAgKFiwieimOan_uldemMHCWSZOo2Sunuq9bez2k5tla9yGs3NOeFYEX5l0sEnyy5qH1mg8URzoDzf1Hd1HNt-rw',
      variant: 'small',
    },
  ],
} as const;

export const galleryItems = [
  {
    id: 'powerpuff-collection',
    title: 'The Powerpuff Collection',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEqERrCHrsr_hmvtR7KT7GmA5XWFZsNDU-91xzTb5VKuF7h7mWr1izkimQoZRV7EE-A3WQcylsJMwgSlf4EGnRU1Iem1-ra7FMkJmfRM3gB5PoQno9qP9AKN6_ZGNuw3XCBqNvNzyZiX8Z94jDZ44YO1aThkQ2lgmo9G_yeJkIqd6Nhap3hN-kktGEPbKVqx8vezq6nIYSAWRF-vXD3d3qm8-RKKlZzRBdzdup-8EhbXHT3qv063vH8lzRo_39Xi4pYgj0-ZI34A',
    gridArea: 'large',
  },
  {
    id: 'mojo-miniature',
    title: 'Mojo Jojo Miniature',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-RcGINM8GKMvz2OXnzgvw4NFoRGk1dsQvdRxQEZqrZ2GB5K_gy6ulXaAnwS_bGCh0wcoqIvHUljh3SoajlWguwyTCoZwh22gzuCH2xGRzkAxl4_I-6Ck1C9ewqwdaT3LbBY_T8j7G_a8spAIdOykTAUuPR2tEPvSRSF5qvOR3tFXuImjRMfQAgKFiwieimOan_uldemMHCWSZOo2Sunuq9bez2k5tla9yGs3NOeFYEX5l0sEnyy5qH1mg8URzoDzf1Hd1HNt-rw',
    gridArea: 'small',
  },
  {
    id: 'buttercup',
    title: 'The Fighter: Buttercup',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD96SbjdzSvSajtdQsuSGcOX41q3iaZVnBNPwB-LuZybRw1QDbu3T4C7la7N8Rj6QeTccKbzUbnvZ5ZeAFOv3O168E9Iq5OSZ6cxCzV2qq0_k1c7kkhiNZuO4jHbZ2eHB2GZLm4hDgoz65FwN_YZBT805iYd-B0DlN_jlKQ8MG7J1YhHDqEjoN4iLv6Z0xPkR8nSrK2PQ-NkrObuMQBxHuPWD3duIkLj7430Bt7G5gKJxsi-DC3HhOW1uzvQg0pFyYnPefpNAboUA',
    gridArea: 'tall',
  },
  {
    id: 'bubbles',
    title: 'Bubbles Doll',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAry9lk_PN2uYcCKCoUZ-wgkAnvV5e3uIl8e26UlLgr_9ezh3nUTxIlXUPieCxm4r9TEAKUy7NEPoZOuP_XJ40JDks6NX4tcwip4ONV_l0orEf7HtlP1APVOXuoWETESUwizR3NGpkPR_yGwku7HocJU3cJhKKSsVFUB2R2E5UB8PMLthpKOGkDUcAeJaruw-iopTSlOnN9MKhlMONRvKLyJnj8AYvV9myvupO_joZlYDZZqPBbiPmOGZJYAiArFxo5t_u_WhIQ3g',
    gridArea: 'small',
  },
] as const;

export const curatorQuote = {
  text: '"We believe pop-culture icons deserve the same tactile elegance as any fine art installation."',
  author: 'The Curator at Velvet Stitch',
} as const;

export const footerContent = {
  brandName: 'Velvet Stitch',
  copyright: '© 2024 Velvet Stitch. Hand-hooked in Townsville.',
  links: [
    { id: 'terms', label: 'Terms', href: '#' },
    { id: 'privacy', label: 'Privacy', href: '#' },
    { id: 'shipping', label: 'Shipping', href: '#' },
    { id: 'care', label: 'Care Guide', href: '#' },
  ],
} as const;

export type NavigationLink = (typeof navigationLinks)[number];
export type FeaturedCollection = (typeof featuredCollections.collections)[number];
export type GalleryItem = (typeof galleryItems)[number];
export type FooterLink = (typeof footerContent.links)[number];
