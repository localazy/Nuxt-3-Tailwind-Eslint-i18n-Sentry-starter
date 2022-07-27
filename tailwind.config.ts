import { Config } from 'tailwindcss';

export default <Config> {
  content: [
    './modules/**/*.{vue,js,ts}',
    'app.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}