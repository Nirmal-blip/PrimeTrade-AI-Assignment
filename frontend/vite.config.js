import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  console.log('Vite proxy target:', env.VITE_BACKEND_URL);//to check right backend url

  if (!env.VITE_BACKEND_URL) { //top check that the env is loaded or not
    throw new Error('VITE_BACKEND_URL is missing. Check your .env file');
  }

  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react(), tailwindcss()],
  }
})
