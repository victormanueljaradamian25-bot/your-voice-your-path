import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// base './' + hash routing => works on GitHub Pages and any static host
export default defineConfig({ plugins: [react()], base: './' });
