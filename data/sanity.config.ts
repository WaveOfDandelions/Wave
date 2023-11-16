import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {iconify} from 'sanity-plugin-iconify'

export default defineConfig({
  name: 'default',
  title: 'Wave',

  projectId: '887dyjc6',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), iconify()],

  schema: {
    types: schemaTypes,
  },
})
