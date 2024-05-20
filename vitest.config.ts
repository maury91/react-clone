import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(() => mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: ['packages/template/*'],
      environment: 'jsdom',
      snapshotSerializers: ['jest-serializer-html']
    },
  })
));