import {MdPerson} from 'react-icons/md'

export default {
  title: 'Authors',
  name: 'authors',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Author Photo',
      name: 'authorPhoto',
      type: 'customImage',
    },
    {
      title: 'Icon for post',
      name: 'icon',
      type: 'icon',
    },
  ],
}
