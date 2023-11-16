import {GiNotebook} from 'react-icons/gi'

export default {
  title: 'Posts',
  name: 'blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Post Image',
      name: 'postImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'date',
    },
    {
      title: 'Icon for post',
      name: 'icon',
      type: 'icon', // <-- Icon schema type
    },
  ],
}
