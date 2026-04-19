import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Vite automatically exposes VITE_ prefixed env vars via import.meta.env
        // No need to manually define them here
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('.', import.meta.url)),
        }
      }
    };
});