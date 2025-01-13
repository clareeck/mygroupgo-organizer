export const colors = {
  // Main colors
  foreground: '#1A535C', // Dark teal for text
  background: '#F1F0FB', // Soft gray for main background
  
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
    DEFAULT: '#E5DEFF', // Soft purple
    foreground: '#1A535C',
  },
  
  // Muted colors
  muted: {
    DEFAULT: '#F7F7F9', // Light gray
    foreground: '#1A535C',
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