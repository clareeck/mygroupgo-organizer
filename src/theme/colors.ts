export const colors = {
  // Main colors
  foreground: '#1E293B', // Slate-800 for text
  background: '#F8FAFC', // Slate-50 for background
  
  // Primary colors
  primary: {
    DEFAULT: '#646cff', // Original primary color
    light: '#747bff',   
    dark: '#535bf2',    
    foreground: '#FFFFFF',
  },
  
  // Secondary colors
  secondary: {
    DEFAULT: '#1E293B', // Slate-800
    foreground: '#FFFFFF',
  },
  
  // Accent colors
  accent: {
    DEFAULT: '#61dafb', // Original accent color
    foreground: '#FFFFFF',
  },
  
  // Muted colors
  muted: {
    DEFAULT: '#F1F5F9', // Slate-100
    foreground: '#475569', // Slate-600
  },
  
  // UI elements
  card: {
    DEFAULT: '#FFFFFF',
    foreground: '#1E293B',
  },
  
  popover: {
    DEFAULT: '#FFFFFF',
    foreground: '#1E293B',
  },
} as const;