import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { icons as antdIcons } from '@iconify-json/ant-design'
import { icons as riIcons } from '@iconify-json/ri'

const getSafelist = () => {
  const base = 'prose prose-sm m-auto text-left'.split(' ')

  const riIconNames = Object.keys(riIcons.icons).map(iconName => `i-${riIcons.prefix}:${iconName}`)
  const antdIconNames = Object.keys(antdIcons.icons).map(iconName => `i-${antdIcons.prefix}:${iconName}`)

  return [...riIconNames, ...antdIconNames, ...base]
}

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      // Can't seem to request
      // cdn: 'https://esm.sh/',
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: getSafelist(),
})
