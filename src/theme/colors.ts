export const colors = {
  // Main colors
  foreground: '#1A535C', // Dark teal for text
  background: '#f7fff7', // Light mint for background
  
  // Primary colors
  primary: {
    DEFAULT: '#4ecdc4', // Bright teal
    light: '#6ed7d0',   // Lighter teal
    dark: '#3eb8b0',    // Darker teal
    foreground: '#FFFFFF',
  },
  
  // Secondary colors
  secondary: {
    DEFAULT: '#1A535C', // Dark teal
    foreground: '#FFFFFF',
  },
  
  // Accent colors
  accent: {
    DEFAULT: '#ff6b6b', // Coral red
    foreground: '#FFFFFF',
  },
  
  // Muted colors
  muted: {
    DEFAULT: '#f7fff7', // Light mint
    foreground: '#1A535C', // Dark teal
  },
  
  // UI elements
  card: {
    DEFAULT: '#FFFFFF',
    foreground: '#1A535C',
  },
  
  popover: {
    DEFAULT: '#FFFFFF',
    foreground: '#1A535C',
  },
} as const;