//import pkg from './package.json'

const external = ['fs', 'path', 'crypto', 'stream', 'crc/lib/crc32.js', 'sha.js/sha1', 'sha.js/sha1.js',
  "async-lock", "clean-git-ref", "crc-32", "diff3", "ignore", "minimisted", "pako", "pify", "readable-stream",
  "sha.js", "simple-get"];

const PACKAGE_JSON = umd => JSON.stringify({
  type: 'module',
  main: 'index.cjs',
  module: 'index.js',
  typings: 'index.d.ts',
  unpkg: umd ? 'index.umd.js' : undefined },
null, 2);

// const pkgify = (input, output, name) => {
//  import('fs') import('path')
//   fs.mkdirSync(path.join('.', output), { recursive: true })
//   fs.writeFileSync(path.join('.', output, 'package.json'),
//     PACKAGE_JSON(!!name))
//   return [
//     ecmaConfig(`${input}/index.js`, `${output}/index.js`),
//     //nodeConfig(`${input}/index.js`, `${output}/index.cjs`),
//     ...(name
//       ? [umdConfig(`${input}/index.js`, `${output}/index.umd.js`, name)]
//       : []),
//   ]
// }

export default [{ input: { 
    "git": "src/index.js",
    "git-internal": "src/internal-apis.js",
    "git-http": "src/http.js",//...pkgify('GitHttp'),
  }, external,  //exports: 'named',
  output: [{ format: 'esm', dir: `./modules` }],
}]

// # stuff that gets generated during test setup
// /__tests__/__fixtures__/.superblock.txt
// /__tests__/__fixtures__/index.json

// # Dist
// /http
// /index.cjs
// /index.d.ts
// /index.js
// /index.umd.min.js
// /index.umd.min.d.ts
// /index.umd.min.js.map
// /internal-apis.js
// /internal-apis.d.ts
// /internal-apis.cjs
// /internal-apis.umd.min.js
// /internal-apis.umd.min.js.map
// /dist