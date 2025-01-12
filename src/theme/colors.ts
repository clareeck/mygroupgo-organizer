export const colors = {
  // Main colors
  foreground: '#1A535C', // Dark teal for text
  background: '#f7fff7', // Light mint/white for background
  
  // Primary colors
  primary: {
    DEFAULT: '#4ecdc4', // Bright teal
    light: '#7ad8d1',   // Lighter teal
    dark: '#3ba59e',    // Darker teal
    foreground: '#ffffff', // White text on primary
  },
  
  // Secondary colors
  secondary: {
    DEFAULT: '#1A535C', // Dark teal
    foreground: '#ffffff', // White text on secondary
  },
  
  // Accent colors
  accent: {
    DEFAULT: '#ff6b6b', // Coral red
    foreground: '#ffffff', // White text on accent
  },
  
  // Muted colors
  muted: {
    DEFAULT: '#ffe66d', // Soft yellow
    foreground: '#1A535C', // Dark teal text on muted
  },
  
  // UI elements
  card: {
    DEFAULT: '#ffffff', // Pure white
    foreground: '#1A535C', // Dark teal text on card
  },
  
  popover: {
    DEFAULT: '#ffffff', // Pure white
    foreground: '#1A535C', // Dark teal text on popover
  },
} as const;