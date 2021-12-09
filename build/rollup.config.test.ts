import rollupConfig from './rollup.config';
import typescript from 'rollup-plugin-typescript2';
import path from 'path';

delete rollupConfig.input;

rollupConfig.output = {
    sourcemap: true
};

export default rollupConfig;
