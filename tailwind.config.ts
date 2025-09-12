import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        'commons': ['TT Commons', 'sans-serif'],
      },
      colors: {
        'black-rich': 'rgba(16, 16, 16, 1)',
        'gray-deep': 'rgba(35, 35, 35, 1)',
        'gray-pro': 'rgba(134, 134, 134, 1)',
        'gray-light': 'rgba(243, 243, 243, 1)',
        'gray-soft': 'rgba(232, 232, 232, 1)',
        white: 'rgba(255, 255, 255, 1)',
        mint: 'rgba(158, 255, 191, 1)',
        'purple-deep': 'rgba(121, 65, 167, 1)',
        lavender: 'rgba(226, 190, 255, 1)',
        'blue-link': 'rgba(16, 89, 200, 1)',
      },
    },
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./app.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`
  ]
}