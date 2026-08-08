import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes asset paths relative — required for GitHub Pages project sites
// Change to '/your-repo-name/' if assets don't load after deploy
export default defineConfig({
  plugins: [react()],
  base: './',
})
