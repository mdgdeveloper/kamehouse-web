import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        retro: ['VT323', 'monospace'],
      },
      colors: {
        grass: '#5E7C16',
        dirt: '#836539',
        stone: '#7D7D7D',
        sky: '#68C3FF',
        wood: '#8B5A2B',
        sand: '#DDD39F',
      },
    },
  },
  plugins: [],
}
export default config