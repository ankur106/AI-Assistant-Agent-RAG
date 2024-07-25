// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import sassPlugin from 'vite-plugin-sass';

// Custom plugin function
const removeConsoleLogPlugin = () => {
  return {
    name: 'remove-console-log',
    transform(code: string) {
      // Replace console.log statements with an empty string
      const transformedCode = code.replace(/console\.log\([^\)]*\);?/g, '');
      return {
        code: transformedCode,
        map: null, // provide source map if needed
      };
    }
  };
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), removeConsoleLogPlugin()],
});

