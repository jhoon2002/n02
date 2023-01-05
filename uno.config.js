import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import presetAttributify from '@unocss/preset-attributify'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'
import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),

        // anu-vue preset
        presetAnu(),

        // default theme preset
        presetThemeDefault(),

        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: [
                    {
                        name: 'Radio Canada',
                        weights: ['300', '400', '500', '700'],
                    },
                    {
                        name: 'Noto Sans KR',
                        weights: ['100', '300', '400', '500', '700', '900'],
                    },
                ],
            },
        }),
    ],
    include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
    preflights: [
        {
            getCSS: ({ theme }) => `
                  * {
                    font-family: 'Radio Canada', 'Noto Sans KR', sans-serif;;
                    padding: 0;
                    margin: 0;
                  }
            `,
        },
    ],
})
