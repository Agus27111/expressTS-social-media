const 
{
  build
} = require('esbuild');

build({
  entryPoints: ['src/index.ts'],
  outfile: 'build/index.js',
  bundle: true,
  keepNames: true,
  sourcemap: true,
  minify: true,
  platform: 'node',
  target: ['es2020'],
 
}).catch(() => process.exit(1));  


