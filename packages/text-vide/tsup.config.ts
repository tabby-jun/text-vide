import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/bookmarklet.ts', 'src/index.ts'],
  clean: true,
  minify: true,
  dts: true,
  format: ['esm', 'cjs'],
  treeshake: true,
  splitting: false,
  onSuccess: 'bookmarklet dist/bookmarklet.js dist/bookmarklet.x.js',
});
