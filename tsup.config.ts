import { defineConfig } from 'tsup-preset-solid'

export default defineConfig(
  {
    entry: 'src/index.ts',
    devEntry: true,
    // @ts-ignore
    dropConsole: true,
  },
  {
    // Enable this to write export conditions to package.json
    // writePackageJson: true,
  },
)
