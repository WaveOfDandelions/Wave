import {GiBookCover} from 'react-icons/gi'

export default {
  title: 'Posts',
  name: 'blog',
  type: 'document',
  icon: GiBookCover,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Post Image',
      name: 'postImage',
      type: 'customImage',
    },
    {
      title: 'Blog Content',
      name: 'blogBody',
      type: 'textEditor',
    },
    {
      title: 'Icon for post',
      name: 'icon',
      type: 'icon',
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string): string => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
