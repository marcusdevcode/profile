import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {webfontDownload} from "vite-plugin-webfont-dl";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      webfontDownload([
          "https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@700&family=Sen:wght@400..800&display=swap",
      ]),
  ],
})
