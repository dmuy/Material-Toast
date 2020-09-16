import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { uglify } from "rollup-plugin-uglify"

const isProd = process.env.NODE_ENV === 'production',
    libName = 'mdtoast',
    outputJs = isProd ? `${libName}.min.js` : `${libName}.js`,
    outputCss = isProd ? `${libName}.min.css` : `${libName}.css`

let plugins = [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    scss({
        output: `dist/${outputCss}`,
        outputStyle: isProd ? 'compressed' : 'expanded',
        processor: css => postcss([autoprefixer({ overrideBrowserslist: "defaults, ie >= 11" })])
    })
]

if (isProd) plugins.push(uglify({ sourcemap: false }))

export default {
    input: `src/${libName}.js`,
    output: {
        file: `dist/${outputJs}`,
        format: 'umd',
        name: libName,
        compact: isProd,
        banner: "/*!Don't remove this!\n * Material Toast plugin v2.0\n * https://github.com/dmuy/Material-Toast\n * \n * Author: Dionlee Uy\n * Email: dionleeuy@gmail.com\n */"
    },
    plugins: plugins
}