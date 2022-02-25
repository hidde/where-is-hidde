export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
    metadata: [
      'location',
      'palette'
    ]
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'What\'s on this picture?',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
