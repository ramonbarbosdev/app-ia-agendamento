import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const VerdeAgro = definePreset(Aura, {
  ...Aura,
  semantic: {
    ...Aura.semantic,
    primary: {
      50: '#f0f7e6',
      100: '#d9ebbf',
      200: '#c1df99',
      300: '#aad373',
      400: '#95c754',
      500: '#AED143', // cor principal
      600: '#88a831',
      700: '#6b8726',
      800: '#4e621a',
      900: '#333e0f',
      950: '#1a1f07',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
        primary: {
          color: '{primary.500}', // usa sua cor
          inverseColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          background: '{primary.500}',
          focusBackground: '{primary.600}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
        primary: {
          color: '{primary.400}',
          inverseColor: '{zinc.950}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}',
        },
        highlight: {
          background: '{primary.400}',
          focusBackground: '{primary.300}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
    },
  },
});

export default VerdeAgro;
