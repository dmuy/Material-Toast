import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

const libName = 'mdtoast',
    outputJs = `${libName}.js`

let plugins = [
    babel({
        exclude: /node_modules/,
        babelHelpers: 'bundled'
    }),
    resolve(),
    commonjs()
]

export default {
    input: `src/${libName}.js`,
    output: {
        file: `dist/${outputJs}`,
        format: 'umd',
        name: libName,
        banner: "/*!Don't remove this!\n * Material-Toast plugin v2.0\n * https://github.com/dmuy/Material-Toast\n * \n * Author: Dionlee Uy\n * Email: dionleeuy@gmail.com\n */"
    },
    plugins: plugins
}