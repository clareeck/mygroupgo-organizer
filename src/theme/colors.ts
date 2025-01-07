export const colors = {
  // Main colors
  foreground: '#4e4187', // Purple for text
  background: '#f0f7ee', // Light mint
  
  // Primary colors
  primary: {
    DEFAULT: '#3083dc', // Blue
    light: '#5599e3',   // Lighter blue
    dark: '#246db5',    // Darker blue
    foreground: '#4e4187', // Purple text on primary
  },
  
  // Secondary colors
  secondary: {
    DEFAULT: '#afdedc', // Light teal
    foreground: '#4e4187', // Purple text on secondary
  },
  
  // Accent colors
  accent: {
    DEFAULT: '#ff6978', // Coral pink
    foreground: '#f0f7ee', // Light mint text on accent
  },
  
  // Muted colors
  muted: {
    DEFAULT: '#4e4187', // Purple
    foreground: '#f0f7ee', // Light mint text on muted
  },
  
  // UI elements
  card: {
    DEFAULT: '#f0f7ee', // Light mint
    foreground: '#4e4187', // Purple text on card
  },
  
  popover: {
    DEFAULT: '#f0f7ee', // Light mint
    foreground: '#4e4187', // Purple text on popover
  },
} as const;