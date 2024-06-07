// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/Roland",
//   plugins: [react()],

  

// })

// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   base: '/Roland', // Set your GitHub repository name here
//   plugins: [react()],
//   root: 'src',
//   build: {
//     outDir: '../dist', // Specify your desired output directory
//   },
// });


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Roland', // Set your GitHub repository name here
  plugins: [react()],
  root: '.', // Specify your project root (source directory)
  build: {
    outDir: '../dist', // Specify your desired output directory
  },
});
