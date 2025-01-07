export const colors = {
  // Main colors
  foreground: '#1A1A1A', // Dark text
  background: '#ffffff', // Clean white background
  
  // Primary colors
  primary: {
    DEFAULT: '#4ecdc4', // Keep brand teal
    light: '#7ad8d1',   
    dark: '#3ba59e',    
    foreground: '#ffffff',
  },
  
  // Secondary colors
  secondary: {
    DEFAULT: '#1A535C',
    foreground: '#ffffff',
  },
  
  // Accent colors
  accent: {
    DEFAULT: '#ff6b6b',
    foreground: '#ffffff',
  },
  
  // Muted colors
  muted: {
    DEFAULT: '#ffe66d',
    foreground: '#1A1A1A',
  },
  
  // UI elements
  card: {
    DEFAULT: '#ffffff',
    foreground: '#1A1A1A',
  },
  
  popover: {
    DEFAULT: '#ffffff',
    foreground: '#1A1A1A',
  },
} as const;