import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './test/flying-saucer/start.ts',
    output: {
        dir: 'dist-test',
        chunkFileNames: "[name]-[hash].js",
        format: 'es',
        sourcemap: false,
        inlineDynamicImports: false,
    },
    plugins: [
        resolve({
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs'],
        }),
        typescript({
            //tsconfig: 'tsconfig.json',
        }),
        alias({
            entries: [
                { find: /^core\/(.*)$/, replacement: './test/neon-zebra/base/$1.ts' },
                { find: /^base\/(.*)$/, replacement: './test/flying-saucer/base/$1.ts' },
            ]
        }),
        commonjs()
    ]
};
