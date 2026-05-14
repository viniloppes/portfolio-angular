import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { ButtonModule } from 'primeng/button';

import { definePreset } from '@primeuix/themes';
// import Lara from '@primeuix/themes/lara';    // outros temas disponíveis
// import Material from '@primeuix/themes/material';
const MyPreset = definePreset(Aura, {
  /**
   * semantic: tokens que se propagam para múltiplos componentes.
   * Mudar 'highlight' aqui afeta qualquer componente que o use.
   */
  semantic: {
    colorScheme: {
      light: {
        semantic: {
          highlight: {
            background: '{primary.50}',
            color: '{primary.700}',
          }
        }
      },
      dark: {
        semantic: {
          highlight: {
            background: '{primary.200}',
            color: '{primary.900}',
          }
        }
      }
    }
  },

  /**
   * components: tokens específicos de cada componente PrimeNG.
   * Afetam SOMENTE o componente declarado — não vazam para outros.
   *
   * Tokens disponíveis para p-tag:
   *   - {severity}.background  → fundo do p-tag
   *   - {severity}.color       → cor do texto
   *   - border.radius          → arredondamento
   *   - font.size / font.weight
   *   - padding.x / padding.y
   *
   * Severidades: success | info | warn | danger | secondary | contrast
   */
  components: {
    tag: {
      /**
       * root: tokens visuais gerais do componente
       * (TagTokenSections.Root — válidos pelo tipo TagDesignTokens)
       *   borderRadius  → tag.border.radius
       *   fontSize      → tag.font.size
       *   fontWeight    → tag.font.weight
       *   padding       → tag.padding  (shorthand: 'y x')
       */
      root: {
        borderRadius: '6px',
        fontSize: '0.7rem',
        fontWeight: '600',
        padding: '0.2rem 0.5rem',
      },

      /**
       * success / info: cores padrão (light mode por padrão do tema base)
       * Aqui definimos o light mode como base.
       */
      success: {
        background: '#e8f5e9',  // verde bem claro
        color: '#2e7d32',       // verde escuro legível
      },
      info: {
        background: '#e3f2fd',
        color: '#1565c0',
      },

      /**
       * colorScheme: sobrescreve as cores conforme o modo ativo.
       * dark: é ativado quando .my-app-dark está no <html>.
       */
      colorScheme: {
        dark: {
          success: {
            background: '#ffffffff',  // verde escuro
            color: '#a5d6a7',       // verde claro
          },
          info: {
            background: '#0d2137',
            color: '#90caf9',
          }
        },
        light: {
          success: {
            background: '#1b1d3aff',  // verde escuro
            color: '#a5c6d6ff',       // verde claro
          },
          info: {
            background: '#0d2137',
            color: '#90caf9',
          }
        }
      },
    }
  }
});
export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',

        }
      }
    })

  ]
};
