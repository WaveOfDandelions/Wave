export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error('Ti clown').required(),
      option: {
        isHighlighted: true,
      },
    },
  ],
}
