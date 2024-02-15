import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/simple-image-magnifier-example/',
    mode: 'production',
    plugins: [react()],
})
