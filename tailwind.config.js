import flowbite from 'flowbite-react/tailwind';
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",flowbite.content(),],
    
  theme: {
    extend: {
      screens:{
        'xsm':'400px',
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

