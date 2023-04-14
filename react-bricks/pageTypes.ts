import { types } from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
  {
    name: 'blog',
    pluralName: 'Blog',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    allowedBlockTypes: [
      'title',
      'paragraph',
      'big-image',
      'video',
      'code',
      'tweet',
      'tweet-light',
      'blog-title',
      'newsletter-subscribe',
      'external-data-example',
    ],
    getExternalData: () =>
      fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((data) => ({
          catFact: data.fact,
        })),
  },

  {
    name: 'layout',
    pluralName: 'layout',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    isEntity: true,
  },
]

export default pageTypes
